// app/admin/(protected)/ilustrasi-cerita/new/page.tsx
import CeritaForm from "../CeritaForm";

export default function NewCeritaPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Tambah Cerita Baru</h1>
            <CeritaForm cerita={undefined} />
        </div>
    );
}