'use client';

import React, { useState } from "react";
import { Card, CardBody, Button, Divider } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import EmptyState from "@/components/EmptyState";

type Materi = {
    judul: string;
    deskripsi: string;
    fileUrl: string;
};

interface MateriViewerProps {
    initialData: Materi[];
}

export default function MateriViewer({ initialData }: MateriViewerProps) {

    if (!initialData || initialData.length === 0) {
        return (
            <EmptyState
                title="Belum Ada Materi"
                message="Koleksi materi pembelajaran sedang kami siapkan. Mohon kunjungi kembali halaman ini nanti."
            />
        );
    }

    const [currentMateriIndex, setCurrentMateriIndex] = useState(0);

    const handlePrev = () => {
        setCurrentMateriIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setCurrentMateriIndex((prev) => (prev < initialData.length - 1 ? prev + 1 : prev));
    };

    const currentMateri = initialData[currentMateriIndex];

    return (
        <Card className="shadow-2xl">
            <CardBody>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
                    <div className="w-full h-[600px] rounded-lg overflow-hidden border">
                        <iframe
                            src={`${currentMateri.fileUrl}#view=fitH&navpanes=0`}
                            width="100%"
                            height="100%"
                            title={currentMateri.judul}
                        />
                    </div>

                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold font-serif text-brand-blue-700">{currentMateri.judul}</h2>
                            <Divider className="my-4" />
                            <p className="text-gray-700 leading-relaxed">{currentMateri.deskripsi}</p>
                        </div>

                        <div className="mt-6">
                            <p className="text-sm text-gray-500 mb-2">
                                Materi {currentMateriIndex + 1} dari {initialData.length}
                            </p>
                            <div className="flex gap-4">
                                <Button
                                    color="primary"
                                    variant="bordered"
                                    onPress={handlePrev}
                                    isDisabled={currentMateriIndex === 0}
                                    startContent={<FaArrowLeft />}
                                >
                                    Sebelumnya
                                </Button>
                                <Button
                                    color="primary"
                                    onPress={handleNext}
                                    isDisabled={currentMateriIndex === initialData.length - 1}
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