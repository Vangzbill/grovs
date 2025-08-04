'use client';

import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import EmptyState from "@/components/EmptyState";

interface Ilustrasi {
    id: number;
    judul: string;
    isi: string;
    gambarUrl: string | null;
}

interface CeritaViewerProps {
    initialData: Ilustrasi[];
}

export default function CeritaViewer({ initialData }: CeritaViewerProps) {
    const [currentIlustrasiIndex, setCurrentIlustrasiIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIlustrasiIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setCurrentIlustrasiIndex((prev) => (prev < initialData.length - 1 ? prev + 1 : prev));
    };

    const currentIlustrasi = initialData[currentIlustrasiIndex];

    if (!initialData || initialData.length === 0) {
        return (
            <EmptyState
                title="Belum Ada Ilustrasi"
                message="Koleksi ilustrasi cerita sedang kami siapkan. Mohon kunjungi kembali halaman ini nanti."
            />
        );
    }
    return (
        <div className="flex flex-col items-center gap-8">
            <div className="text-center max-w-3xl">
                <h2 className="text-3xl font-bold font-serif text-brand-blue-700">{currentIlustrasi.judul}</h2>
                {/* Menggunakan `isi` dari database sebagai sinopsis */}
                <p className="mt-2 text-gray-700 leading-relaxed">{currentIlustrasi.isi}</p>
            </div>

            <div className="w-full max-w-screen-lg h-[600px] border rounded-lg shadow-lg bg-gray-100">
                <iframe
                    className="w-full h-full rounded-md"
                    src={currentIlustrasi.gambarUrl ? currentIlustrasi.gambarUrl : "/placeholder-image.png"}
                    title={currentIlustrasi.judul}
                    allowFullScreen
                />
            </div>

            <div className="flex flex-col items-center gap-2">
                <p className="text-sm text-gray-500">
                    Cerita {currentIlustrasiIndex + 1} dari {initialData.length}
                </p>
                <div className="flex gap-4">
                    <Button
                        color="primary"
                        variant="bordered"
                        onPress={handlePrev}
                        isDisabled={currentIlustrasiIndex === 0}
                        startContent={<FaArrowLeft />}
                    >
                        Sebelumnya
                    </Button>
                    <Button
                        color="primary"
                        onPress={handleNext}
                        isDisabled={currentIlustrasiIndex === initialData.length - 1}
                        endContent={<FaArrowRight />}
                    >
                        Selanjutnya
                    </Button>
                </div>
            </div>
        </div>
    );
}