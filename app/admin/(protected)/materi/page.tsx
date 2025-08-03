// app/admin/materi/page.tsx
import prisma from '@/lib/prisma';
import { Button } from "@nextui-org/react";
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';
import MateriTable from '@/app/admin/(protected)/components/MateriTable';

async function getMateri() {
    const materi = await prisma.materi.findMany({
        orderBy: { createdAt: 'desc' },
    });
    return materi;
}

export default async function MateriAdminPage() {
    const dataMateri = await getMateri();

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Kelola Materi Pembelajaran</h1>
                <Button as={Link} href="/admin/materi/new" color="primary" startContent={<FaPlus />}>
                    Tambah Materi
                </Button>
            </div>

            {/* Panggil komponen tabel dan kirim data sebagai prop */}
            <MateriTable dataMateri={dataMateri} />

        </div>
    );
}