'use client';

import React, { useState } from "react";
import { Card, CardBody, Button, Divider } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import NavbarComponent from "../../components/Navbar";
import Footer from "../../components/Footer";
import EmptyState from "../../components/EmptyState";

interface Modul {
  title: string;
  description: string;
  pdfUrl: string;
}

const modulData: Modul[] = [];

export default function ModulAjarPage() {
  if (modulData.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <NavbarComponent />
        <main className="flex-grow container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-brand-dark">Modul Ajar Interaktif</h1>
            <p className="text-lg text-gray-600 mt-2">Pilih dan pelajari modul geguritan secara mandiri.</p>
          </div>
          <EmptyState
            title="Belum Ada Modul"
            message="Koleksi modul ajar sedang kami siapkan. Mohon kunjungi kembali halaman ini nanti."
          />
        </main>
        <Footer />
      </div>
    );
  }

  const [currentModulIndex, setCurrentModulIndex] = useState(0);

  const handlePrev = () => {
    setCurrentModulIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNext = () => {
    setCurrentModulIndex((prevIndex) => (prevIndex < modulData.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const currentModul = modulData[currentModulIndex];

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarComponent />

      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-brand-dark">Modul Ajar Interaktif</h1>
          <p className="text-lg text-gray-600 mt-2">Pilih dan pelajari modul geguritan secara mandiri.</p>
        </div>

        <Card className="shadow-2xl">
          <CardBody>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
              {/* Kolom Kiri: PDF Preview */}
              <div className="w-full h-[600px] rounded-lg overflow-hidden border">
                <iframe
                  src={`${currentModul.pdfUrl}#view=fitH&navpanes=0`}
                  width="100%"
                  height="100%"
                  title={currentModul.title}
                />
              </div>

              {/* Kolom Kanan: Deskripsi dan Navigasi */}
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold font-serif text-brand-blue-700">{currentModul.title}</h2>
                  <Divider className="my-4" />
                  <p className="text-gray-700 leading-relaxed">{currentModul.description}</p>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-gray-500 mb-2">
                    Modul {currentModulIndex + 1} dari {modulData.length}
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
                      isDisabled={currentModulIndex === modulData.length - 1}
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