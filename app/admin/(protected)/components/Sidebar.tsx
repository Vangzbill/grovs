'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Listbox, ListboxItem } from '@nextui-org/react';
import { FaTachometerAlt, FaBook, FaBookOpen, FaImage, FaFeatherAlt } from 'react-icons/fa';

const sidebarItems = [
    { key: 'dashboard', href: '/admin/dashboard', label: 'Dashboard', icon: <FaTachometerAlt /> },
    { key: 'modul', href: '/admin/modul', label: 'Modul Ajar', icon: <FaBook /> },
    { key: 'materi', href: '/admin/materi', label: 'Materi Pembelajaran', icon: <FaBookOpen /> },
    { key: 'cerita', href: '/admin/ilustrasi-cerita', label: 'Ilustrasi Cerita', icon: <FaImage /> },
    { key: 'geguritan', href: '/admin/antologi', label: 'Antologi Geguritan', icon: <FaFeatherAlt /> },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="h-full w-64 bg-blue-100 border-r">
            <div className="p-4">
                <h2 className="text-xl font-bold text-center">Admin Panel</h2>
            </div>
            <div className="px-2">
                <Listbox
                    aria-label="Admin navigation"
                    variant="flat"
                    itemClasses={{
                        base: "data-[hover=true]:bg-blue-100",
                    }}
                >
                    {sidebarItems.map((item) => (
                        <ListboxItem
                            key={item.key}
                            as={Link}
                            href={item.href}
                            startContent={item.icon}
                            className={pathname === item.href ? 'bg-blue-200 text-primary-600 font-semibold' : ''}
                        >
                            {item.label}
                        </ListboxItem>
                    ))}
                </Listbox>
            </div>
        </div>
    );
}