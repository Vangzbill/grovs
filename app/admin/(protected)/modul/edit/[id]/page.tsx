import prisma from "@/lib/prisma";
import ModulForm from "../../ModulForm";

async function getModulById(id: number) {
    const modul = await prisma.modul.findUnique({
        where: { id },
    });
    return modul;
}

export default async function EditModulPage({ params }: { params: { id: string } }) {
    const modul = await getModulById(Number(params.id));

    if (!modul) {
        return <p>Modul tidak ditemukan.</p>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Edit Modul</h1>
            <ModulForm modul={{ ...modul, id: modul.id.toString() }} />
        </div>
    );
}