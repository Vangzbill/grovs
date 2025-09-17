'use client';

import React from 'react';
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from 'next/link';
import { QRCodeSVG } from 'qrcode.react';

interface SubMenuSelectionProps {
    categories: string[];
}

export default function SubMenuSelection({ categories }: SubMenuSelectionProps) {
    const qrCodeUrl = "https://forms.gle/rWbgCrcXk5jXRYy49";

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Kolom Sub Menu */}
            <Card className="shadow-xl">
                <CardHeader>
                    <h2 className="text-2xl font-serif font-bold text-brand-dark-blue">Pilih Kategori Materi</h2>
                </CardHeader>
                <CardBody>
                    <p className="text-gray-600 mb-6">Silakan pilih salah satu kategori di bawah untuk memulai pembelajaran.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {categories.map((category) => (
                            <Link key={category} href={`/materi-pembelajaran?kategori=${encodeURIComponent(category)}`} passHref>
                                <div className="p-6 bg-brand-blue-50 hover:bg-brand-blue-100 rounded-lg text-center cursor-pointer transition-all duration-300 transform hover:scale-105">
                                    <h3 className="font-semibold text-lg text-brand-blue-800">{category}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </CardBody>
            </Card>

            {/* Kolom QR Code */}
            <Card className="shadow-xl">
                <CardHeader>
                    <h2 className="text-2xl font-serif font-bold text-brand-dark-blue">Kuis dan Pertanyaan</h2>
                </CardHeader>
                <CardBody className="flex flex-col items-center justify-center text-center gap-4">
                    <p className="text-gray-600">Anda bisa mengerjakan kuis dan pertanyaan melalui QR code di bawah ini.</p>
                    <div className='bg-white p-4 rounded-lg border'>
                        <QRCodeSVG value={qrCodeUrl} size={200} />
                    </div>
                    <a href={qrCodeUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-blue-600 hover:underline mt-2">
                        {qrCodeUrl}
                    </a>
                </CardBody>
            </Card>
        </div>
    );
}