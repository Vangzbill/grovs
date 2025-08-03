// app/admin/dashboard/page.tsx
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../api/auth/[...nextauth]/route";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { LogoutButton } from "../../../admin/(protected)/components/LogoutButton";

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <p className="text-gray-600">Selamat Datang, {session?.user?.email}</p>
                </div>
                <LogoutButton />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                    <CardHeader>Total Modul</CardHeader>
                    <CardBody><p className="text-3xl font-bold">5</p></CardBody>
                </Card>
                <Card>
                    <CardHeader>Total Materi</CardHeader>
                    <CardBody><p className="text-3xl font-bold">12</p></CardBody>
                </Card>
                <Card>
                    <CardHeader>Total Cerita</CardHeader>
                    <CardBody><p className="text-3xl font-bold">8</p></CardBody>
                </Card>
            </div>
        </div>
    );
}