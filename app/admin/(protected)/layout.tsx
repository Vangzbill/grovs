import React from 'react';
import Sidebar from '../(protected)/components/Sidebar';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar akan tersembunyi di mobile, dan tampil di desktop */}
            <div className="hidden lg:flex lg:flex-shrink-0">
                <Sidebar />
            </div>
            <div className="flex flex-col flex-1 w-0">
                <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
                    <div className="py-6 px-4 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}