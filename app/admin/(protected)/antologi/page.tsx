import prisma from '@/lib/prisma';
import { Button } from "@nextui-org/react";
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';
import GeguritanTable from '@/app/admin/(protected)/components/GeguritanTable';

async function getGeguritan() {
    const geguritan = await prisma.geguritan.findMany({
        orderBy: { createdAt: 'desc' },
    });
    return geguritan;
}

export default async function AntologiAdminPage() {
    const dataGeguritanRaw = await getGeguritan();
    const dataGeguritan = dataGeguritanRaw.map(item => ({
        ...item,
        gambarUrl: item.gambarUrl === null ? undefined : item.gambarUrl,
    }));

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Kelola Antologi Geguritan</h1>
                <Button as={Link} href="/admin/antologi/new" color="primary" startContent={<FaPlus />}>
                    Tambah Geguritan
                </Button>
            </div>

            <GeguritanTable dataGeguritan={dataGeguritan} />
        </div>
    );
}