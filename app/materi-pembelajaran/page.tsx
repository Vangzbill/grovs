import prisma from "@/lib/prisma";
import NavbarComponent from "@/components/navbar";
import Footer from "@/components/Footer";
import MateriViewer from "./MateriViewer";
import SubMenuSelection from "./SubMenuSelection";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { FaArrowLeft } from "react-icons/fa";

export const dynamic = 'force-dynamic';

async function getMateri() {
    const materi = await prisma.materi.findMany();
    return materi;
}

export default async function MateriPembelajaranPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {

    const selectedCategory = searchParams?.kategori as string | undefined;
    const allMateri = await getMateri();

    const uniqueCategories = [...new Set(allMateri.map(m => m.kategori))];

    const filteredMateri = selectedCategory
        ? allMateri.filter(m => m.kategori === selectedCategory)
            .map(m => ({
                ...m,
                deskripsi: m.deskripsi || '',
                fileUrl: m.fileUrl || ''
            }))
        : [];

    return (
        <div className="flex flex-col min-h-screen">
            <NavbarComponent />

            <main className="flex-grow container mx-auto px-6 py-12 relative overflow-hidden">
                {/* Dekorasi Aksara Jawa tetap ada di background */}
                <div className="absolute top-[10%] left-[5%] text-[80px] sm:text-[150px] lg:text-[200px] font-serif text-brand-blue-100 z-0 rotate-12">ꦒ</div>
                <div className="absolute bottom-[15%] right-[5%] text-[100px] sm:text-[200px] lg:text-[300px] font-serif text-brand-blue-100 z-0 -rotate-12">ꦗ</div>
                <div className="absolute top-[25%] right-[15%] text-[80px] sm:text-[180px] font-serif text-brand-blue-100 z-0">ꦱ</div>
                <div className="absolute bottom-[10%] left-[10%] text-[70px] sm:text-[150px] font-serif text-brand-blue-100 z-0 rotate-45">ꦗ</div>

                <div className="relative z-10 container mx-auto px-6 py-12">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-serif font-bold text-brand-dark">Materi Pembelajaran</h1>
                        <p className="text-lg text-gray-600 mt-2">
                            {selectedCategory ? `Kategori: ${selectedCategory}` : "Perdalam pemahaman Anda melalui materi pendukung berikut."}
                        </p>
                    </div>

                    {/* Logika Kondisional */}
                    {selectedCategory ? (
                        <div>
                            <Link href="/materi-pembelajaran" className="mb-6 inline-block">
                                <Button color="primary" variant="ghost" startContent={<FaArrowLeft />}>
                                    Kembali ke Pilihan Kategori
                                </Button>
                            </Link>
                            <MateriViewer initialData={filteredMateri} />
                        </div>
                    ) : (
                        <SubMenuSelection categories={uniqueCategories} />
                    )}

                </div>
            </main>

            <Footer />
        </div>
    );
}