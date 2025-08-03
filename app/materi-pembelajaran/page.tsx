// app/materi-pembelajaran/page.tsx
'use client';

import React, { useState } from "react";
import { Card, CardBody, Button, Divider } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import NavbarComponent from "../../components/Navbar";
import Footer from "../../components/Footer";
import EmptyState from "../../components/EmptyState";

const materiData = [
    {
        id: 1,
        title: "Materi 1: Analisis Struktur Geguritan",
        description: "Materi ini fokus pada cara menganalisis struktur fisik (tipografi, diksi, imaji) dan struktur batin (tema, rasa, nada, amanat) dari sebuah geguritan.",
        pdfUrl: "/modul-1.pdf"
    },
];

export default function MateriPembelajaranPage() {
    if (materiData.length === 0) {
        return (
            <div className="flex flex-col min-h-screen">
                <NavbarComponent />
                <main className="flex-grow container mx-auto px-6 py-12">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-serif font-bold text-brand-dark">Materi Pembelajaran</h1>
                        <p className="text-lg text-gray-600 mt-2">Perdalam pemahaman Anda melalui materi pendukung berikut.</p>
                    </div>
                    <EmptyState
                        title="Belum Ada Materi"
                        message="Koleksi materi pembelajaran sedang kami siapkan. Mohon kunjungi kembali halaman ini nanti."
                    />
                </main>
                <Footer />
            </div>
        );
    }

    const [currentMateriIndex, setCurrentMateriIndex] = useState(0);

    const handlePrev = () => {
        setCurrentMateriIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setCurrentMateriIndex((prev) => (prev < materiData.length - 1 ? prev + 1 : prev));
    };

    const currentMateri = materiData[currentMateriIndex];

    return (
        <div className="flex flex-col min-h-screen">
            <NavbarComponent />

            <main className="flex-grow container mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-serif font-bold text-brand-dark">Materi Pembelajaran</h1>
                    <p className="text-lg text-gray-600 mt-2">Perdalam pemahaman Anda melalui materi pendukung berikut.</p>
                </div>

                <Card className="shadow-2xl">
                    <CardBody>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
                            <div className="w-full h-[600px] rounded-lg overflow-hidden border">
                                <iframe
                                    src={`${currentMateri.pdfUrl}#view=fitH&navpanes=0`}
                                    width="100%"
                                    height="100%"
                                    title={currentMateri.title}
                                />
                            </div>

                            <div className="flex flex-col justify-between">
                                <div>
                                    <h2 className="text-2xl font-bold font-serif text-brand-blue-700">{currentMateri.title}</h2>
                                    <Divider className="my-4" />
                                    <p className="text-gray-700 leading-relaxed">{currentMateri.description}</p>
                                </div>

                                <div className="mt-6">
                                    <p className="text-sm text-gray-500 mb-2">
                                        Materi {currentMateriIndex + 1} dari {materiData.length}
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
                                            isDisabled={currentMateriIndex === materiData.length - 1}
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
            </main>

            <Footer />
        </div>
    );
}