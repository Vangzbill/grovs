'use client';

import { Input, Textarea, Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";
import React, { useState, useRef } from 'react';
import { FaUpload } from "react-icons/fa";
import { createGeguritan, updateGeguritan } from "./actions";

function SubmitButton({ isEditing }: { isEditing: boolean }) {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" color="primary" isLoading={pending}>
            {isEditing ? 'Update Geguritan' : 'Simpan Geguritan'}
        </Button>
    );
}

interface Geguritan {
    id: string;
    judul: string;
    isi: string;
    gambarUrl?: string;
}

export default function GeguritanForm({ geguritan }: { geguritan?: Geguritan }) {
    const formAction = geguritan ? updateGeguritan.bind(null, Number(geguritan.id)) : createGeguritan;
    const isEditing = !!geguritan;

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [error, setError] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                setError('Ukuran file maksimal adalah 2MB.');
                setSelectedFile(null);
                return;
            }
            setError('');
            setSelectedFile(file);
        }
    };

    return (
        <form action={formAction} className="flex flex-col gap-6">
            <Input name="judul" label="Judul Geguritan" defaultValue={geguritan?.judul} isRequired />
            <Textarea name="isi" label="Isi Geguritan" defaultValue={geguritan?.isi} isRequired minRows={15} />

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gambar Ilustrasi (Opsional, Maks 2MB)</label>
                <input
                    type="file"
                    name="gambar"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*" // Menerima semua jenis gambar
                    onChange={handleFileChange}
                />
                <div
                    className="flex items-center justify-between p-3 border-2 border-dashed rounded-lg cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                >
                    <span className="text-gray-500">{selectedFile ? selectedFile.name : (geguritan?.gambarUrl || 'Pilih file...')}</span>
                    <Button type="button" startContent={<FaUpload />}>Pilih Gambar</Button>
                </div>
                {error && <p className="text-danger text-sm mt-1">{error}</p>}
                {isEditing && geguritan?.gambarUrl && <p className="text-xs text-gray-500 mt-1">Kosongkan jika tidak ingin mengubah gambar.</p>}
            </div>

            <div className="flex justify-end">
                <SubmitButton isEditing={isEditing} />
            </div>
        </form>
    );
}