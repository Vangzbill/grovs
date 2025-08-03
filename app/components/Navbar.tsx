// app/components/Navbar.tsx
'use client';

import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from '@nextui-org/react';
import { usePathname } from 'next/navigation';
const navLinks = [
  { name: 'Modul Ajar', href: '/modul' },
  { name: 'Materi Pembelajaran', href: '/materi-pembelajaran' },
  { name: 'Ilustrasi Cerita', href: '/ilustrasi-cerita' },
  { name: 'Antologi Geguritan', href: '/antologi' },
];

export default function NavbarComponent({ showCtaButton = false }: { showCtaButton?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname(); // <-- Dapatkan path URL saat ini

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered isBlurred className="bg-white/70">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" color="foreground" className="font-bold text-inherit text-xl">
            GROVS
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-6"
        justify={showCtaButton ? "center" : "end"}
      >
        {/* Render item navigasi dengan kondisi aktif berdasarkan path */}
        {navLinks.map((link) => (
          <NavbarItem key={link.href} isActive={pathname === link.href}>
            <Link
              color={pathname === link.href ? "primary" : "foreground"}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {showCtaButton && (
        <NavbarContent justify="end">
          {/* Tombol "Mulai Belajar" hanya muncul jika showCtaButton adalah true */}

          <NavbarItem className="hidden lg:flex">
            <Button as={Link} className="bg-brand-blue-600 text-white" href="#fitur" variant="flat">
              Mulai Belajar
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}

      {/* Menu dropdown untuk versi mobile */}

      <NavbarMenu>
        {navLinks.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full"
              color={pathname === item.href ? "primary" : "foreground"}
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}