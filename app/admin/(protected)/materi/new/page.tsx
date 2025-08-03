import MateriForm from "../MateriForm";

export default function NewMateriPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Tambah Materi Baru</h1>
            <MateriForm materi={undefined} />
        </div>
    );
}