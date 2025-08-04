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

export async function createMateri(formData: FormData) {
  const judul = formData.get('judul') as string;
  const deskripsi = formData.get('deskripsi') as string;
  const file = formData.get('file') as File;

  if (!judul || !deskripsi || !file || file.size === 0) {
    return { error: 'Judul, deskripsi, dan file wajib diisi.' };
  }

  const fileUrl = await saveFile(file);

  await prisma.materi.create({
    data: {
      judul,
      deskripsi,
      fileUrl,
    },
  });

  revalidatePath('/admin/materi');
  redirect('/admin/materi');
}

export async function updateMateri(id: number, formData: FormData) {
  const judul = formData.get('judul') as string;
  const deskripsi = formData.get('deskripsi') as string;
  const file = formData.get('file') as File;

  let fileUrl: string | undefined = undefined;

  if (file && file.size > 0) {
    fileUrl = await saveFile(file);
  }

  await prisma.materi.update({
    where: { id },
    data: {
      judul,
      deskripsi,
      ...(fileUrl && { fileUrl }),
    },
  });

  revalidatePath('/admin/materi');
  redirect('/admin/materi');
}

export async function deleteMateri(id: number) {
  try {
    await prisma.materi.delete({
      where: { id },
    });
    revalidatePath('/admin/materi');
    return { success: true };
  } catch (_) {
    return { success: false, error: 'Gagal menghapus materi.' };
  }
}