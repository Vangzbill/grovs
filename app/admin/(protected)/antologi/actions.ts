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

export async function createGeguritan(formData: FormData) {
  const judul = formData.get('judul') as string;
  const isi = formData.get('isi') as string;
  const file = formData.get('gambar') as File;
  let gambarUrl: string | undefined = undefined;

  if (!judul || !isi) {
    return { error: 'Judul dan isi wajib diisi.' };
  }
  
  if (file && file.size > 0) {
    gambarUrl = await saveFile(file);
  }

  await prisma.geguritan.create({
    data: {
      judul,
      isi,
      gambarUrl,
    },
  });

  revalidatePath('/admin/antologi');
  redirect('/admin/antologi');
}

export async function updateGeguritan(id: number, formData: FormData) {
  const judul = formData.get('judul') as string;
  const isi = formData.get('isi') as string;
  const file = formData.get('gambar') as File;
  let gambarUrl: string | undefined = undefined;

  if (file && file.size > 0) {
    gambarUrl = await saveFile(file);
  }

  await prisma.geguritan.update({
    where: { id },
    data: {
      judul,
      isi,
      ...(gambarUrl && { gambarUrl }),
    },
  });

  revalidatePath('/admin/antologi');
  redirect('/admin/antologi');
}

export async function deleteGeguritan(id: number) {
  try {
    await prisma.geguritan.delete({
      where: { id },
    });
    revalidatePath('/admin/antologi');
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Gagal menghapus geguritan.' };
  }
}