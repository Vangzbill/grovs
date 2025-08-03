'use client';

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Tooltip, Link, Image } from "@nextui-org/react";
import { FaEdit, FaTrash } from 'react-icons/fa';
import React from "react";
import { deleteGeguritan } from '@/app/admin/(protected)/antologi/actions';

interface GeguritanItem {
    id: string | number;
    judul: string;
    isi: string;
    gambarUrl?: string;
    createdAt: string | Date;
}

interface GeguritanTableProps {
    dataGeguritan: GeguritanItem[];
}

export default function GeguritanTable({ dataGeguritan }: GeguritanTableProps) {
    return (
        <Table aria-label="Tabel Antologi Geguritan">
            <TableHeader>
                <TableColumn>JUDUL</TableColumn>
                <TableColumn>DESKRIPSI</TableColumn>
                <TableColumn>FILE</TableColumn>
                <TableColumn>AKSI</TableColumn>
            </TableHeader>
            <TableBody items={dataGeguritan} emptyContent={"Belum ada geguritan."}>
                {(item) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.judul}</TableCell>
                        <TableCell>
                            <p className="max-w-xs">{item.isi.substring(0, 100)}...</p>
                        </TableCell>
                        <TableCell>
                            <Link href={item.gambarUrl} isExternal showAnchorIcon size="sm">
                                Lihat File
                            </Link>
                        </TableCell>
                        <TableCell>
                            <div className="relative flex items-center gap-2">
                                <Tooltip content="Edit Geguritan">
                                    <Button isIconOnly as={Link} href={`/admin/antologi/edit/${item.id}`} size="sm" variant="light">
                                        <FaEdit className="text-lg text-default-500" />
                                    </Button>
                                </Tooltip>
                                <form action={() => deleteGeguritan(Number(item.id))}>
                                    <Tooltip color="danger" content="Hapus Geguritan">
                                        <Button
                                            isIconOnly
                                            type="submit"
                                            size="sm"
                                            variant="light"
                                            onClick={(e) => !confirm('Apakah Anda yakin ingin menghapus geguritan ini?') && e.preventDefault()}
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