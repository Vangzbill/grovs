import prisma from "@/lib/prisma";
import MateriForm from "../../MateriForm";

async function getMateriById(id: number) {
    const materi = await prisma.materi.findUnique({
        where: { id },
    });
    return materi;
}

export default async function EditMateriPage({ params }: { params: { id: string } }) {
    const materi = await getMateriById(Number(params.id));

    if (!materi) {
        return <p>Materi tidak ditemukan.</p>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Edit Materi</h1>
            <MateriForm materi={{ ...materi, id: String(materi.id) }} />
        </div>
    );
}