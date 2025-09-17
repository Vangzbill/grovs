'use client';

import React, { useState } from "react";
import { Card, CardBody, Button, Divider } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import EmptyState from "@/components/EmptyState";

export type Materi = {
    judul: string;
    deskripsi: string;
    fileUrl: string;
    kategori: string;
};

interface MateriViewerProps {
    initialData: Materi[];
}

export default function MateriViewer({ initialData }: MateriViewerProps) {
    const [currentMateriIndex, setCurrentMateriIndex] = useState(0);

    const handlePrev = () => {
        setCurrentMateriIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setCurrentMateriIndex((prev) => (prev < initialData.length - 1 ? prev + 1 : prev));
    };

    const currentMateri = initialData[currentMateriIndex];

    if (!initialData || initialData.length === 0) {
        return (
            <EmptyState
                title="Belum Ada Materi"
                message="Tidak ada materi yang tersedia untuk kategori ini. Silakan pilih kategori yang lain."
            />
        );
    }

    return (
        <Card className="shadow-2xl">
            <CardBody>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
                    <div className="w-full h-[600px] rounded-lg overflow-hidden border flex items-center justify-center bg-gray-50">
                        {/* --- PERUBAHAN DI SINI --- */}
                        {/* Tampilkan iframe HANYA jika fileUrl ada */}
                        {currentMateri.fileUrl ? (
                            <iframe
                                src={`${currentMateri.fileUrl}#view=fitH&navpanes=0`}
                                width="100%"
                                height="100%"
                                title={currentMateri.judul}
                            />
                        ) : (
                            // Tampilkan pesan jika fileUrl tidak ada (null)
                            <div className="text-center text-gray-500">
                                <p className="font-semibold">Pratinjau Tidak Tersedia</p>
                                <p className="text-sm">File untuk materi ini belum diunggah.</p>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold font-serif text-brand-blue-700">{currentMateri.judul}</h2>
                            <Divider className="my-4" />
                            {/* --- PERUBAHAN DI SINI --- */}
                            {/* Beri fallback jika deskripsi tidak ada (null) */}
                            <p className="text-gray-700 leading-relaxed">
                                {currentMateri.deskripsi ?? 'Deskripsi untuk materi ini belum tersedia.'}
                            </p>
                        </div>
                        {/* ... sisa komponen ... */}
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}