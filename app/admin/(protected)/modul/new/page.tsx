import ModulForm from "../ModulForm";

export default function NewModulPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Tambah Modul Baru</h1>
            <ModulForm modul={undefined} />
        </div>
    );
}