import prisma from '@/lib/prisma';
import { Button } from "@nextui-org/react";
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';
import CeritaTable from '@/app/admin/(protected)/components/CeritaTable';

async function getCerita() {
    const cerita = await prisma.cerita.findMany({
        orderBy: { createdAt: 'desc' },
    });
    return cerita;
}

export default async function IlustrasiCeritaAdminPage() {
    const dataCerita = await getCerita();

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Kelola Ilustrasi Cerita</h1>
                <Button as={Link} href="/admin/ilustrasi-cerita/new" color="primary" startContent={<FaPlus />}>
                    Tambah Cerita
                </Button>
            </div>

            <CeritaTable dataCerita={dataCerita} />
        </div>
    );
}