import NavbarComponent from "@/components/navbar";
import Footer from "@/components/Footer";
import Papa from "papaparse";
import EmptyState from "@/components/EmptyState";
import KaryaTable from "@/app/components/KaryaTable";

export const dynamic = 'force-dynamic';

async function getKaryaData(): Promise<[]> {
    const sheetId = "1t7EPR6Q76QZTqhJPJJdDGSUkLX8TShIe7JTUenVaM1o";
    const gid = "1824907618";
    const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;

    try {
        const response = await fetch(csvUrl, { next: { revalidate: 10 } });
        if (!response.ok) throw new Error(`Gagal memuat data: ${response.statusText}`);

        const csvText = await response.text();
        if (csvText.startsWith("<!DOCTYPE html>")) {
            console.warn("Akses ke Google Sheet ditolak. Pastikan sheet sudah di-publish ke web.");
            return [];
        }

        const parsedData = Papa.parse(csvText, {
            header: true,
            skipEmptyLines: true,
        });

        if (parsedData.errors.length > 0) return [];
        return parsedData.data as [];
    } catch (error) {
        console.error("Error saat mengambil data karya:", error);
        return [];
    }
}

export default async function KaryaPage() {
    const dataKarya = await getKaryaData();

    return (
        <div className="flex flex-col min-h-screen">
            <NavbarComponent />

            <main className="flex-grow container mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-serif font-bold text-brand-dark">Karya</h1>
                    <p className="text-lg text-gray-600 mt-2">Kumpulan karya</p>
                </div>

                {dataKarya && dataKarya.length > 0 ? (
                    <KaryaTable data={dataKarya} />
                ) : (
                    <EmptyState
                        title="Karya Belum Tersedia"
                        message="Data karya siswa saat ini tidak dapat diakses atau daftar masih kosong. Silakan coba lagi nanti."
                    />
                )}
            </main>

            <Footer />
        </div>
    );
}