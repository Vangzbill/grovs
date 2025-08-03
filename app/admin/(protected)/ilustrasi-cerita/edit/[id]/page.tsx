import prisma from "@/lib/prisma";
import CeritaForm from "../../CeritaForm";

async function getCeritaById(id: number) {
    const cerita = await prisma.cerita.findUnique({
        where: { id },
    });
    return cerita;
}

export default async function EditCeritaPage({ params }: { params: { id: string } }) {
    const cerita = await getCeritaById(Number(params.id));

    if (!cerita) {
        return <p>Cerita tidak ditemukan.</p>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Edit Cerita</h1>
            <CeritaForm cerita={{ ...cerita, id: String(cerita.id) }} />
        </div>
    );
}