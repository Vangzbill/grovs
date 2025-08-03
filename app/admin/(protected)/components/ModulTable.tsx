'use client';

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Tooltip, Link } from "@nextui-org/react";
import { FaEdit, FaTrash } from 'react-icons/fa';
import React from "react";
import { deleteModul } from "@/app/admin/(protected)/modul/actions";

interface ModulItem {
    id: string | number;
    judul: string;
    fileUrl: string;
    createdAt: string | Date;
}

interface ModulTableProps {
    dataModul: ModulItem[];
}

export default function ModulTable({ dataModul }: ModulTableProps) {
    return (
        <Table aria-label="Tabel Modul Ajar">
            <TableHeader>
                <TableColumn>JUDUL</TableColumn>
                <TableColumn>URL FILE</TableColumn>
                <TableColumn>DIBUAT PADA</TableColumn>
                <TableColumn>AKSI</TableColumn>
            </TableHeader>
            <TableBody items={dataModul} emptyContent={"Belum ada modul."}>
                {(item) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.judul}</TableCell>
                        <TableCell>
                            <Link href={item.fileUrl} isExternal showAnchorIcon size="sm">
                                Lihat File
                            </Link>
                        </TableCell>
                        <TableCell>{new Date(item.createdAt).toLocaleDateString('id-ID')}</TableCell>
                        <TableCell>
                            <div className="relative flex items-center gap-2">
                                <Tooltip content="Edit Modul">
                                    <Button isIconOnly as={Link} href={`/admin/modul/edit/${item.id}`} size="sm" variant="light">
                                        <FaEdit className="text-lg text-default-500" />
                                    </Button>
                                </Tooltip>
                                <form action={() => deleteModul(Number(item.id))}>
                                    <Tooltip color="danger" content="Hapus Modul">
                                        <Button
                                            isIconOnly
                                            type="submit"
                                            size="sm"
                                            variant="light"
                                            onClick={(e) => { if (!confirm('Apakah Anda yakin ingin menghapus modul ini?')) e.preventDefault(); }}
                                        >
                                            <FaTrash className="text-lg text-danger" />
                                        </Button>
                                    </Tooltip>
                                </form>
                            </div>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}