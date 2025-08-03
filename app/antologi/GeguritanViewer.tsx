'use client';

import React, { useState } from "react";
import { Button, Card, CardBody, Divider, Image } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import EmptyState from "@/components/EmptyState";

interface Geguritan {
    id: number;
    judul: string;
    isi: string;
    gambarUrl: string | null;
}

export default function GeguritanViewer({ initialData }: { initialData: Geguritan[] }) {
    if (!initialData || initialData.length === 0) {
        return (
            <EmptyState
                title="Belum Ada Geguritan"
                message="Koleksi geguritan sedang kami siapkan. Mohon kunjungi kembali halaman ini nanti."
            />
        );
    }

    const [currentGeguritanIndex, setCurrentGeguritanIndex] = useState(0);

    const handlePrev = () => {
        setCurrentGeguritanIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setCurrentGeguritanIndex((prev) => (prev < initialData.length - 1 ? prev + 1 : prev));
    };

    const currentGeguritan = initialData[currentGeguritanIndex];

    return (
        <div className="flex flex-col items-center gap-8">
            <Card className="w-full max-w-3xl shadow-lg">
                <CardBody className="p-8 md:p-12">
                    {/* Tampilkan gambar jika ada */}
                    {currentGeguritan.gambarUrl && (
                        <div className="w-full max-w-screen-md h-[700px] border rounded-lg shadow-lg bg-gray-100">
                            <iframe
                                className="w-full h-full rounded-md"
                                src={`${currentGeguritan.gambarUrl}#view=fitH&navpanes=0`}
                                title={currentGeguritan.judul}
                            />
                        </div>
                    )}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold font-serif text-brand-blue-700">{currentGeguritan.judul}</h2>
                    </div>
                    <Divider className="my-6" />
                    {/* Tampilkan isi geguritan dengan menjaga format baris baru */}
                    <p className="whitespace-pre-line text-gray-700 leading-loose text-center font-serif">
                        {currentGeguritan.isi}
                    </p>
                </CardBody>
            </Card>

            {/* Pagination */}
            <div className="flex flex-col items-center gap-2 mt-4">
                <p className="text-sm text-gray-500">
                    Geguritan {currentGeguritanIndex + 1} dari {initialData.length}
                </p>
                <div className="flex gap-4">
                    <Button
                        color="primary"
                        variant="bordered"
                        onPress={handlePrev}
                        isDisabled={currentGeguritanIndex === 0}
                        startContent={<FaArrowLeft />}
                    >
                        Sebelumnya
                    </Button>
                    <Button
                        color="primary"
                        onPress={handleNext}
                        isDisabled={currentGeguritanIndex === initialData.length - 1}
                        endContent={<FaArrowRight />}
                    >
                        Selanjutnya
                    </Button>
                </div>
            </div>
        </div>
    );
}