'use client';

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Tooltip } from "@nextui-org/react";
import Link from 'next/link';
import { FaEdit, FaTrash } from 'react-icons/fa';
import React from "react";
import { deleteMateri } from '@/app/admin/(protected)/materi/actions';

interface MateriItem {
    id: string | number;
    judul: string;
    deskripsi: string;
    fileUrl: string;
    createdAt: string | number | Date;
}

export default function MateriTable({ dataMateri }: { dataMateri: MateriItem[] }) {
    return (
        <Table aria-label="Tabel Materi Pembelajaran">
            <TableHeader>
                <TableColumn>JUDUL</TableColumn>
                <TableColumn>DESKRIPSI</TableColumn>
                <TableColumn>DIBUAT PADA</TableColumn>
                <TableColumn>FILE</TableColumn>
                <TableColumn>AKSI</TableColumn>
            </TableHeader>
            <TableBody items={dataMateri} emptyContent={"Belum ada materi."}>
                {(item) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.judul}</TableCell>
                        <TableCell style={{ maxWidth: 250, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            {item.deskripsi}
                        </TableCell>
                        <TableCell>{new Date(item.createdAt).toLocaleDateString('id-ID')}</TableCell>
                        <TableCell>
                            <a href={item.fileUrl} target="_blank" rel="noopener noreferrer">
                                {item.fileUrl}
                            </a>
                        </TableCell>
                        <TableCell>
                            <div className="relative flex items-center gap-2">
                                <Tooltip content="Edit Materi">
                                    <Button isIconOnly as={Link} href={`/admin/materi/edit/${item.id}`} size="sm" variant="light">
                                        <FaEdit className="text-lg text-default-500" />
                                    </Button>
                                </Tooltip>
                                <form action={() => deleteMateri(Number(item.id))}>
                                    <Tooltip color="danger" content="Hapus Materi">
                                        <Button
                                            isIconOnly type="submit" size="sm" variant="light"
                                            onClick={(e) => !confirm('Yakin ingin menghapus materi ini?') && e.preventDefault()}
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