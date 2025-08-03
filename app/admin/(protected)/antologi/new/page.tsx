import GeguritanForm from "../GeguritanForm";

export default function NewGeguritanPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Tambah Geguritan Baru</h1>
            <GeguritanForm geguritan={undefined} />
        </div>
    );
}