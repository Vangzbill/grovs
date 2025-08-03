'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createCerita(formData: FormData) {
  const judul = formData.get('judul') as string;
  const isi = formData.get('isi') as string;
  const gambarUrl = formData.get('gambarUrl') as string;

  if (!judul || !isi) {
    return { error: 'Judul dan isi wajib diisi.' };
  }

  await prisma.cerita.create({
    data: {
      judul,
      isi,
      gambarUrl: gambarUrl || null, 
    },
  });

  revalidatePath('/admin/ilustrasi-cerita');
  redirect('/admin/ilustrasi-cerita');
}

export async function updateCerita(id: number, formData: FormData) {
  const judul = formData.get('judul') as string;
  const isi = formData.get('isi') as string;
  const gambarUrl = formData.get('gambarUrl') as string;

  await prisma.cerita.update({
    where: { id },
    data: {
      judul,
      isi,
      gambarUrl: gambarUrl || null,
    },
  });

  revalidatePath('/admin/ilustrasi-cerita');
  redirect('/admin/ilustrasi-cerita');
}

export async function deleteCerita(id: number) {
  try {
    await prisma.cerita.delete({
      where: { id },
    });
    revalidatePath('/admin/ilustrasi-cerita');
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Gagal menghapus cerita.' };
  }
}