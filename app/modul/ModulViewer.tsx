'use client';

import React, { useState } from "react";
import { Card, CardBody, Button, Divider } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import EmptyState from "@/components/EmptyState";

type Modul = {
    judul: string;
    fileUrl: string;
};

interface ModulViewerProps {
    initialData: Modul[];
}

export default function ModulViewer({ initialData }: ModulViewerProps) {
    const [currentModulIndex, setCurrentModulIndex] = useState(0);

    const handlePrev = () => {
        setCurrentModulIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setCurrentModulIndex((prev) => (prev < initialData.length - 1 ? prev + 1 : prev));
    };

    const currentModul = initialData[currentModulIndex];

    if (!initialData || initialData.length === 0) {
        return (
            <EmptyState
                title="Belum Ada Modul"
                message="Koleksi modul ajar sedang kami siapkan. Mohon kunjungi kembali halaman ini nanti."
            />
        );
    }

    return (
        <Card className="shadow-2xl">
            <CardBody className="p-0">
                <div className="flex flex-col md:flex-row">
                    {/* Kolom Kiri: PDF Preview */}
                    <div className="w-full md:w-3/5 h-[500px] md:h-[700px] rounded-l-lg overflow-hidden">
                        <iframe
                            src={`${currentModul.fileUrl}#view=fitH&navpanes=0`}
                            width="100%"
                            height="100%"
                            title={currentModul.judul}
                        />
                    </div>

                    {/* Kolom Kanan: Deskripsi dan Navigasi */}
                    <div className="w-full md:w-2/5 flex flex-col justify-between p-6 md:p-8">
                        <div>
                            <h2 className="text-2xl font-bold font-serif text-brand-blue-700">{currentModul.judul}</h2>
                            <Divider className="my-4" />
                            {/* Model Modul tidak memiliki deskripsi, jadi bagian ini bisa dikosongkan atau diisi info lain */}
                            <p className="text-gray-600 text-sm">Gunakan pratinjau di samping untuk mempelajari modul ini secara detail.</p>
                        </div>

                        <div className="mt-6">
                            <p className="text-sm text-gray-500 mb-2">
                                Modul {currentModulIndex + 1} dari {initialData.length}
                            </p>
                            <div className="flex gap-4">
                                <Button
                                    color="primary"
                                    variant="bordered"
                                    onPress={handlePrev}
                                    isDisabled={currentModulIndex === 0}
                                    startContent={<FaArrowLeft />}
                                >
                                    Sebelumnya
                                </Button>
                                <Button
                                    color="primary"
                                    onPress={handleNext}
                                    isDisabled={currentModulIndex === initialData.length - 1}
                                    endContent={<FaArrowRight />}
                                >
                                    Selanjutnya
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}