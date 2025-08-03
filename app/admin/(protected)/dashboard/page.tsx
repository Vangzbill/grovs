// app/admin/dashboard/page.tsx
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { LogoutButton } from "@/app/admin/(protected)/components/LogoutButton";
import prisma from "@/lib/prisma";

async function getStats() {
    const [modulCount, materiCount, ceritaCount, geguritanCount] = await Promise.all([
        prisma.modul.count(),
        prisma.materi.count(),
        prisma.cerita.count(),
        prisma.geguritan.count(),
    ]);
    return { modulCount, materiCount, ceritaCount, geguritanCount };
}

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);
    const stats = await getStats();

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <p className="text-gray-600">Selamat Datang, {session?.user?.email}</p>
                </div>
                <LogoutButton />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>Total Modul</CardHeader>
                    <CardBody><p className="text-3xl font-bold">{stats.modulCount}</p></CardBody>
                </Card>
                <Card>
                    <CardHeader>Total Materi</CardHeader>
                    <CardBody><p className="text-3xl font-bold">{stats.materiCount}</p></CardBody>
                </Card>
                <Card>
                    <CardHeader>Total Cerita</CardHeader>
                    <CardBody><p className="text-3xl font-bold">{stats.ceritaCount}</p></CardBody>
                </Card>
                <Card>
                    <CardHeader>Total Geguritan</CardHeader>
                    <CardBody><p className="text-3xl font-bold">{stats.geguritanCount}</p></CardBody>
                </Card>
            </div>
        </div>
    );
}