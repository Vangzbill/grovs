
import React from 'react';
import { Card, CardBody, Button } from '@nextui-org/react';
import { FaBookDead } from 'react-icons/fa';
import Link from 'next/link';

interface EmptyStateProps {
    title?: string;
    message?: string;
    actionText?: string;
    actionHref?: string;
}

export default function EmptyState({
    title = "Konten Belum Tersedia",
    message = "Saat ini belum ada data yang bisa ditampilkan di halaman ini. Silakan kembali lagi nanti.",
    actionText = "Kembali ke Beranda",
    actionHref = "/"
}: EmptyStateProps) {
    return (
        <div className="flex justify-center items-center w-full py-20">
            <Card className="max-w-lg w-full text-center p-8 shadow-lg bg-gray-50">
                <CardBody className="flex flex-col items-center gap-6">
                    <div className="bg-brand-blue-100 p-6 rounded-full">
                        <FaBookDead size={50} className="text-brand-blue-500" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold font-serif text-brand-dark">{title}</h2>
                        <p className="mt-2 text-gray-600">{message}</p>
                    </div>
                    {actionText && actionHref && (
                        <Button as={Link} href={actionHref} color="primary" variant="ghost">
                            {actionText}
                        </Button>
                    )}
                </CardBody>
            </Card>
        </div>
    );
}