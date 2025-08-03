'use client';

import { Input, Textarea, Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";
import { createCerita, updateCerita } from "./actions";

function SubmitButton({ isEditing }: { isEditing: boolean }) {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" color="primary" isLoading={pending}>
            {isEditing ? 'Update Cerita' : 'Simpan Cerita'}
        </Button>
    );
}

interface Cerita {
    id: string;
    judul: string;
    isi: string;
    gambarUrl?: string | null;
}

export default function CeritaForm({ cerita }: { cerita?: Cerita }) {
    const formAction = cerita ? updateCerita.bind(null, Number(cerita.id)) : createCerita;
    const isEditing = !!cerita;

    return (
        <form action={formAction} className="flex flex-col gap-6">
            <Input name="judul" label="Judul Cerita" defaultValue={cerita?.judul} isRequired />
            <Textarea name="isi" label="Isi Cerita" defaultValue={cerita?.isi} isRequired minRows={15} />
            <Input
                name="gambarUrl"
                label="URL Gambar Ilustrasi (Opsional)"
                defaultValue={cerita?.gambarUrl ?? ''}
                type="url"
                placeholder="https://contoh.com/gambar.jpg"
            />

            <div className="flex justify-end">
                <SubmitButton isEditing={isEditing} />
            </div>
        </form>
    );
}