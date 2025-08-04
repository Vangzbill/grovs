'use client';

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Tooltip, Link } from "@nextui-org/react";
import { FaEdit, FaTrash } from 'react-icons/fa';
import React from "react";
import { deleteCerita } from '@/app/admin/(protected)/ilustrasi-cerita/actions';

interface CeritaItem {
    id: string | number;
    judul: string;
    isi: string;
    gambarUrl?: string | null;
}

interface CeritaTableProps {
    dataCerita: CeritaItem[];
}

export default function CeritaTable({ dataCerita }: CeritaTableProps) {
    return (
        <Table aria-label="Tabel Ilustrasi Cerita">
            <TableHeader>
                <TableColumn>JUDUL</TableColumn>
                <TableColumn>SINOPSIS</TableColumn>
                <TableColumn>GAMBAR</TableColumn>
                <TableColumn>AKSI</TableColumn>
            </TableHeader>
            <TableBody items={dataCerita} emptyContent={"Belum ada cerita."}>
                {(item) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.judul}</TableCell>
                        <TableCell>
                            {/* Tampilkan 100 karakter pertama dari isi sebagai sinopsis */}
                            <p className="max-w-xs">{item.isi.substring(0, 100)}...</p>
                        </TableCell>
                        <TableCell>
                            <Link href={item.gambarUrl ?? undefined} isExternal showAnchorIcon size="sm">
                                Lihat File
                            </Link>
                        </TableCell>
                        <TableCell>
                            <div className="relative flex items-center gap-2">
                                <Tooltip content="Edit Cerita">
                                    <Button isIconOnly as={Link} href={`/admin/ilustrasi-cerita/edit/${item.id}`} size="sm" variant="light">
                                        <FaEdit className="text-lg text-default-500" />
                                    </Button>
                                </Tooltip>
                                <form action={() => deleteCerita(Number(item.id))}>
                                    <Tooltip color="danger" content="Hapus Cerita">
                                        <Button
                                            isIconOnly
                                            type="submit"
                                            size="sm"
                                            variant="light"
                                            onClick={(e) => !confirm('Apakah Anda yakin ingin menghapus cerita ini?') && e.preventDefault()}
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