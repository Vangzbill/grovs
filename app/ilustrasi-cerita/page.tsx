import prisma from "@/lib/prisma";
import NavbarComponent from "@/components/Navbar";
import Footer from "@/components/Footer";
import CeritaViewer from "./CeritaViewer";

async function getCerita() {
    const cerita = await prisma.cerita.findMany({
        orderBy: { createdAt: 'desc' },
    });
    return cerita;
}

export default async function IlustrasiCeritaPage() {
    const allCerita = await getCerita();

    return (
        <div className="flex flex-col min-h-screen">
            <NavbarComponent />

            <main className="flex-grow container mx-auto px-6 py-12 relative overflow-hidden">
                <div className="absolute top-[10%] left-[5%] text-[80px] sm:text-[150px] lg:text-[200px] font-serif text-brand-blue-100 z-0 rotate-12">ꦒ</div>
                <div className="absolute bottom-[15%] right-[5%] text-[100px] sm:text-[200px] lg:text-[300px] font-serif text-brand-blue-100 z-0 -rotate-12">ꦗ</div>
                <div className="absolute top-[25%] right-[15%] text-[80px] sm:text-[180px] font-serif text-brand-blue-100 z-0">ꦱ</div>
                <div className="absolute bottom-[10%] left-[10%] text-[70px] sm:text-[150px] font-serif text-brand-blue-100 z-0 rotate-45">ꦗ</div>
                <div className="absolute top-[5%] right-[25%] text-[60px] sm:text-[100px] font-serif text-brand-blue-100 z-0 -rotate-45">ꦒ</div>
                <div className="absolute top-[5%] left-[40%] text-[60px] sm:text-[100px] font-serif text-brand-blue-100 z-0">ꦚ</div>
                <div className="absolute bottom-[0%] left-[50%] text-[80px] sm:text-[150px] font-serif text-brand-blue-100 z-0 -rotate-45">ꦧ</div>
                <div className="absolute top-[0%] left-[10%] text-[80px] sm:text-[150px] font-serif text-brand-blue-100 z-0 -rotate-45">ꦧ</div>
                <div className="absolute -top-10 -right-10 text-[180px] font-serif text-brand-blue-100 opacity-80 z-0 rotate-12">ꦱ</div>
                <div className="absolute -bottom-20 -left-16 text-[250px] font-serif text-brand-blue-100 opacity-80 z-0 -rotate-12">ꦤ</div>

                <div className="relative z-10 container mx-auto px-6 py-12">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-serif font-bold text-brand-dark">Ilustrasi Cerita</h1>
                        <p className="text-lg text-gray-600 mt-2">Selami kisah-kisah penuh nilai melalui buku cerita interaktif.</p>
                    </div>

                    <CeritaViewer initialData={allCerita} />
                </div>

            </main>

            <Footer />
        </div>
    );
}