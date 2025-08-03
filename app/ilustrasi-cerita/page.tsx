// app/ilustrasi-cerita/page.tsx
'use client';

import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import NavbarComponent from "../../components/Navbar";
import Footer from "../../components/Footer";
import EmptyState from "../../components/EmptyState";

const ilustrasiData = [
    {
        id: 1,
        title: "Cerita Sumanasantaka",
        synopsis: "Sebuah cerita rakyat populer Sang Raja dan Sayembara.",
        embedUrl: "https://online.pubhtml5.com/ugrgn/jtps/"
    },
];

export default function IlustrasiCeritaPage() {
    if (ilustrasiData.length === 0) {
        return (
            <div className="flex flex-col min-h-screen">
                <NavbarComponent />
                <main className="flex-grow container mx-auto px-6 py-12">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-serif font-bold text-brand-dark">Ilustrasi Cerita</h1>
                        <p className="text-lg text-gray-600 mt-2">Kumpulan cerita interaktif yang menginspirasi.</p>
                    </div>
                    <EmptyState
                        title="Belum Ada Ilustrasi"
                        message="Koleksi ilustrasi cerita sedang kami siapkan. Mohon kunjungi kembali halaman ini nanti."
                    />
                </main>
                <Footer />
            </div>
        );
    }

    const [currentIlustrasiIndex, setCurrentIlustrasiIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIlustrasiIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setCurrentIlustrasiIndex((prev) => (prev < ilustrasiData.length - 1 ? prev + 1 : prev));
    };

    const currentIlustrasi = ilustrasiData[currentIlustrasiIndex];

    return (
        <div className="flex flex-col min-h-screen">
            <NavbarComponent />

            <main className="flex-grow container mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-serif font-bold text-brand-dark">Ilustrasi Cerita</h1>
                    <p className="text-lg text-gray-600 mt-2">Selami kisah-kisah penuh nilai melalui buku cerita interaktif.</p>
                </div>

                {/* Kontainer untuk menengahkan konten */}
                <div className="flex flex-col items-center gap-8">

                    {/* Judul dan Sinopsis */}
                    <div className="text-center max-w-3xl">
                        <h2 className="text-3xl font-bold font-serif text-brand-blue-700">{currentIlustrasi.title}</h2>
                        <p className="mt-2 text-gray-700 leading-relaxed">{currentIlustrasi.synopsis}</p>
                    </div>

                    {/* Frame untuk Flipbook */}
                    <div className="w-full max-w-screen-lg h-[600px] border rounded-lg shadow-lg bg-gray-100">
                        <iframe
                            className="w-full h-full rounded-md"
                            src={currentIlustrasi.embedUrl}
                            title={currentIlustrasi.title}
                            allowFullScreen
                        />
                    </div>

                    {/* Pagination */}
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-sm text-gray-500">
                            Cerita {currentIlustrasiIndex + 1} dari {ilustrasiData.length}
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
                                isDisabled={currentIlustrasiIndex === ilustrasiData.length - 1}
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