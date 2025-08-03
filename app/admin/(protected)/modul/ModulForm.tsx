'use client';

import { Input, Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";
import React, { useState, useRef } from 'react';
import { FaUpload } from "react-icons/fa";
import { createModul, updateModul } from "./actions";

function SubmitButton({ isEditing }: { isEditing: boolean }) {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" color="primary" isLoading={pending}>
            {isEditing ? 'Update Modul' : 'Simpan Modul'}
        </Button>
    );
}

interface Modul {
    id: string;
    judul: string;
    fileUrl?: string;
}

export default function ModulForm({ modul }: { modul?: Modul }) {
    const formAction = modul ? updateModul.bind(null, Number(modul.id)) : createModul;
    const isEditing = !!modul;

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
            <Input name="judul" label="Judul Modul" defaultValue={modul?.judul} isRequired />

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">File PDF (Maks 2MB)</label>
                <input
                    type="file"
                    name="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    required={!isEditing}
                />
                <div
                    className="flex items-center justify-between p-3 border-2 border-dashed rounded-lg cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                >
                    <span className="text-gray-500">{selectedFile ? selectedFile.name : (modul?.fileUrl || 'Pilih file...')}</span>
                    <Button type="button" startContent={<FaUpload />}>Pilih File</Button>
                </div>
                {error && <p className="text-danger text-sm mt-1">{error}</p>}
                {isEditing && modul?.fileUrl && <p className="text-xs text-gray-500 mt-1">Kosongkan jika tidak ingin mengubah file.</p>}
            </div>

            <div className="flex justify-end">
                <SubmitButton isEditing={isEditing} />
            </div>
        </form>
    );
}