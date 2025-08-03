import { Link } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center py-6 border-t">
      <div className="text-center text-sm text-default-500">
        <p>&copy; {new Date().getFullYear()} GROVS. All rights reserved.</p>
        <p>Sebuah Platform Pembelajaran Geguritan Berbasis Nilai.</p>
      </div>
    </footer>
  );
};

export default Footer;