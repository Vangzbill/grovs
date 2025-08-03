'use client';

import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import NavbarComponent from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmptyState from "@/components/EmptyState";

interface Geguritan {
    id: number;
    title: string;
    author: string;
    pdfUrl: string;
}

const geguritanData: Geguritan[] = [];

export default function AntologiPage() {
    if (geguritanData.length === 0) {
        return (
            <div className="flex flex-col min-h-screen">
                <NavbarComponent />
                <main className="flex-grow container mx-auto px-6 py-12">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-serif font-bold text-brand-dark">Antologi Geguritan</h1>
                        <p className="text-lg text-gray-600 mt-2">Kumpulan karya sastra pilihan untuk dinikmati dan diresapi.</p>
                    </div>
                    <EmptyState
                        title="Belum Ada Geguritan"
                        message="Koleksi geguritan sedang kami siapkan. Mohon kunjungi kembali halaman ini nanti."
                    />
                </main>
                <Footer />
            </div>
        );
    }
    const [currentGeguritanIndex, setCurrentGeguritanIndex] = useState(0);

    const handlePrev = () => {
        setCurrentGeguritanIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setCurrentGeguritanIndex((prev) => (prev < geguritanData.length - 1 ? prev + 1 : prev));
    };

    const currentGeguritan = geguritanData[currentGeguritanIndex];

    return (
        <div className="flex flex-col min-h-screen">
            <NavbarComponent />

            <main className="flex-grow container mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-serif font-bold text-brand-dark">Antologi Geguritan</h1>
                    <p className="text-lg text-gray-600 mt-2">Kumpulan karya sastra pilihan untuk dinikmati dan diresapi.</p>
                </div>

                {/* Kontainer untuk menengahkan semua konten di bawah ini */}
                <div className="flex flex-col items-center gap-8">

                    {/* Judul Geguritan dan Penulis */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold font-serif text-brand-blue-700">{currentGeguritan.title}</h2>
                        <p className="mt-1 text-gray-500">Karya: {currentGeguritan.author}</p>
                    </div>

                    {/* Frame untuk PDF */}
                    <div className="w-full max-w-screen-md h-[700px] border rounded-lg shadow-lg bg-gray-100">
                        <iframe
                            className="w-full h-full rounded-md"
                            src={`${currentGeguritan.pdfUrl}#view=fitH&navpanes=0`}
                            title={currentGeguritan.title}
                        />
                    </div>

                    {/* Pagination */}
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-sm text-gray-500">
                            Geguritan {currentGeguritanIndex + 1} dari {geguritanData.length}
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
                                isDisabled={currentGeguritanIndex === geguritanData.length - 1}
                                endContent={<FaArrowRight />}
                            >
                                Selanjutnya
                            </Button>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}