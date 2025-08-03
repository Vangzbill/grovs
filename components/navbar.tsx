'use client';

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";

export default function GrovsNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Modul Ajar",
    "Materi Pembelajaran",
    "Ilustrasi Cerita",
    "Antologi Geguritan",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered isBlurred
      className="bg-white/70">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit text-xl">GROVS</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#fitur">
            Fitur
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#modul" color="foreground">
            Pembelajaran
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#ilustrasi">
            Ilustrasi
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#antologi">
            Karya
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} className="bg-brand-blue-600 text-white" href="#fitur" variant="flat">
            Mulai Belajar
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === menuItems.length - 1 ? "primary" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}