import prisma from "@/lib/prisma";
import GeguritanForm from "../../GeguritanForm";

async function getGeguritanById(id: number) {
    const geguritan = await prisma.geguritan.findUnique({
        where: { id },
    });
    return geguritan;
}

export default async function EditGeguritanPage({ params }: { params: { id: string } }) {
    const geguritan = await getGeguritanById(Number(params.id));

    if (!geguritan) {
        return <p>Geguritan tidak ditemukan.</p>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Edit Geguritan</h1>
            <GeguritanForm geguritan={{ ...geguritan, id: String(geguritan.id), gambarUrl: geguritan.gambarUrl ?? undefined }} />
        </div>
    );
}