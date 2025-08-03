import prisma from '@/lib/prisma';
import { Button } from "@nextui-org/react";
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';
import ModulTable from '@/app/admin/(protected)/components/ModulTable';

async function getModul() {
    const modul = await prisma.modul.findMany({
        orderBy: { createdAt: 'desc' },
    });
    return modul;
}

export default async function ModulAdminPage() {
    const dataModul = await getModul();

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Kelola Modul Ajar</h1>
                <Button as={Link} href="/admin/modul/new" color="primary" startContent={<FaPlus />}>
                    Tambah Modul
                </Button>
            </div>

            <ModulTable dataModul={dataModul} />
        </div>
    );
}