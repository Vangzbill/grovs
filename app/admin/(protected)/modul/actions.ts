'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { writeFile } from 'fs/promises';
import path from 'path';

async function saveFile(file: File) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const filename = `${Date.now()}-${file.name}`;
  const filePath = path.join(process.cwd(), 'public/uploads', filename);
  await writeFile(filePath, buffer);
  return `/uploads/${filename}`;
}

export async function createModul(formData: FormData) {
  const judul = formData.get('judul') as string;
  const file = formData.get('file') as File;

  if (!judul || !file || file.size === 0) {
    return { error: 'Judul dan file wajib diisi.' };
  }

  const fileUrl = await saveFile(file);

  await prisma.modul.create({
    data: {
      judul,
      fileUrl,
    },
  });

  revalidatePath('/admin/modul');
  redirect('/admin/modul');
}

export async function updateModul(id: number, formData: FormData) {
  const judul = formData.get('judul') as string;
  const file = formData.get('file') as File;
  let fileUrl: string | undefined = undefined;

  if (file && file.size > 0) {
    fileUrl = await saveFile(file);
  }

  await prisma.modul.update({
    where: { id },
    data: {
      judul,
      ...(fileUrl && { fileUrl }),
    },
  });

  revalidatePath('/admin/modul');
  redirect('/admin/modul');
}

export async function deleteModul(id: number) {
  try {
    await prisma.modul.delete({
      where: { id },
    });
    revalidatePath('/admin/modul');
    return { success: true };
  } catch (_) {
    return { success: false, error: 'Gagal menghapus modul.' };
  }
}