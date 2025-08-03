'use client';

import React, { ReactNode } from "react";
import { Button, Card, CardBody, Image, Link } from "@nextui-org/react";
import { FaBookOpen, FaChalkboardTeacher, FaFeatherAlt, FaLightbulb, FaCheckCircle } from "react-icons/fa";
import GeguritanImage from "@/assets/geguritan.png";
import Footer from "@/components/Footer";
import NavbarComponent from "@/components/Navbar";

const AnimateOnLoad = ({ children, className, delay = 0 }: { children: ReactNode, className?: string, delay?: number }) => (
  <div
    className={`opacity-0 ${className} fade-in-up`}
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </div>
);

export default function PolishedLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarComponent showCtaButton />
      <main className="flex-grow">
        <div className="bg-brand-light">
          {/* SECTION 1: HERO */}
          <section className="relative min-h-screen flex items-center px-6 lg:px-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-50 via-white to-brand-blue-100/30 z-0"></div>
            {/* Ornamen Aksara Jawa */}
            {/* Ornamen Aksara Jawa */}
            <div className="absolute top-[10%] left-[5%] text-[80px] sm:text-[150px] lg:text-[200px] font-serif text-brand-blue-100 z-0 rotate-12">ꦒ</div>
            <div className="absolute bottom-[15%] right-[5%] text-[100px] sm:text-[200px] lg:text-[300px] font-serif text-brand-blue-100 z-0 -rotate-12">ꦗ</div>
            <div className="absolute top-[25%] right-[15%] text-[80px] sm:text-[180px] font-serif text-brand-blue-100 z-0">ꦱ</div>
            <div className="absolute bottom-[10%] left-[10%] text-[70px] sm:text-[150px] font-serif text-brand-blue-100 z-0 rotate-45">ꦗ</div>
            <div className="absolute top-[5%] right-[25%] text-[60px] sm:text-[100px] font-serif text-brand-blue-100 z-0 -rotate-45">ꦒ</div>
            <div className="absolute top-[5%] left-[40%] text-[60px] sm:text-[100px] font-serif text-brand-blue-100 z-0">ꦚ</div>
            <div className="absolute bottom-[0%] left-[50%] text-[80px] sm:text-[150px] font-serif text-brand-blue-100 z-0 -rotate-45">ꦧ</div>


            {/* Konten Hero */}

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
              <div className="text-center lg:text-left">
                <AnimateOnLoad>
                  <h1 className="font-serif text-5xl lg:text-7xl font-bold text-brand-dark leading-tight">
                    Selami Jiwa Sastra,
                    <br />
                    <span className="bg-gradient-to-r from-brand-blue-600 to-brand-blue-400 bg-clip-text text-transparent">
                      Lestarikan Geguritan.
                    </span>
                  </h1>
                </AnimateOnLoad>
                <AnimateOnLoad delay={0.2}>
                  <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                    GEGURITAN OF VALUE SUMANASANTAKA (GROVS) adalah gerbang Anda menuju kekayaan sastra Jawa. Belajar geguritan dengan metode modern, materi mendalam, dan komunitas yang suportif.
                  </p>
                </AnimateOnLoad>
                <AnimateOnLoad delay={0.4}>
                  <div className="mt-10 flex gap-4 justify-center lg:justify-start">
                    <Button
                      as={Link}
                      href="#kenapa-grovs"
                      size="lg"
                      className="bg-brand-blue-600 text-white font-semibold shadow-lg hover:bg-brand-blue-700 transform hover:-translate-y-1 transition-all"
                    >
                      Mulai Sekarang
                    </Button>
                    <Button as={Link} href="#fitur" size="lg" variant="bordered" className="font-semibold border-brand-blue-600 text-brand-blue-600">
                      Lihat Fitur
                    </Button>
                  </div>
                </AnimateOnLoad>
              </div>
              <AnimateOnLoad className="w-full flex justify-center" delay={0.3}>
                <figure className="w-full flex justify-center">
                  <Image
                    isZoomed
                    alt="Ilustrasi modern belajar sastra jawa"
                    src={GeguritanImage.src}
                    className="w-full max-w-md lg:max-w-xl object-contain rounded-2xl shadow-2xl h-auto"
                  />
                </figure>

              </AnimateOnLoad>
            </div>
          </section>

          {/* SECTION 2: FITUR UTAMA */}
          <section id="fitur" className="py-24 px-6 lg:px-20 bg-white">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl font-bold text-brand-dark">Platform Pembelajaran Terlengkap</h2>
              <p className="mt-4 text-lg text-gray-500">
                Semua yang Anda butuhkan untuk menguasai seni geguritan, dari dasar hingga menjadi seorang pujangga.
              </p>
            </div>
            <div className="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <FeatureCard icon={<FaBookOpen />} title="Modul Ajar yang Terstruktur" href="/modul" />
              <FeatureCard icon={<FaLightbulb />} title="Materi Pembelajaran Mendalam" href="/materi-pembelajaran" />
              <FeatureCard icon={<FaChalkboardTeacher />} title="Ilustrasi Cerita Inspiratif" href="/ilustrasi-cerita" />
              <FeatureCard icon={<FaFeatherAlt />} title="Antologi Karya Geguritan" href="/antologi" />
            </div>
          </section>

          {/* SECTION 3: KENAPA GROVS */}
          <section id="kenapa-grovs" className="py-24 px-6 lg:px-20 bg-brand-light">
            <div className="relative max-w-6xl mx-auto">
              <div className="absolute bottom-0 left-10 text-[80px] font-serif text-brand-blue-100 opacity-20">ꦚ</div>

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="w-full">
                <Image alt="Seseorang menulis puisi jawa" src="https://alif.id/storage/posts/WhatsApp-Image-2025-01-31-at-09.13.18.jpeg" className="rounded-xl shadow-lg" />
              </div>
              <div>
                <h2 className="font-serif text-4xl font-bold text-brand-dark">Bukan Sekadar Belajar, Tapi Menghayati.</h2>
                <p className="mt-4 text-lg text-gray-600">GROVS dirancang untuk memberikan pengalaman belajar yang imersif dan bermakna.</p>
                <ul className="mt-8 space-y-4">
                  <BenefitItem text="Kurikulum berbasis nilai-nilai luhur." />
                  <BenefitItem text="Metode pembelajaran interaktif dan modern." />
                  <BenefitItem text="Akses seumur hidup untuk semua materi." />
                </ul>
              </div>
            </div>
          </section>
        </div>
        {/* SECTION 4: FOOTER */}
        <Footer />
      </main>
    </div>
  );

}

const FeatureCard = ({
  icon,
  title,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  href: string;
}) => (
  <Link href={href} className="block">
    <Card className="p-1 group bg-gradient-to-br from-brand-blue-200 to-brand-blue-400 shadow-lg cursor-pointer" shadow="none" isPressable>
      <CardBody className="bg-white rounded-lg p-8 text-center transform group-hover:-translate-y-2 transition-transform duration-300">
        <div className="w-16 h-16 flex items-center justify-center bg-brand-blue-100 text-brand-blue-600 rounded-full mb-4 mx-auto">
          {React.cloneElement(icon as React.ReactElement, { size: 30 })}
        </div>
        <h3 className="text-xl font-bold text-brand-dark">{title}</h3>
      </CardBody>
    </Card>
  </Link>
);

const BenefitItem = ({ text }: { text: string }) => (
  <li className="flex items-start">
    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
    <span className="text-gray-700 text-lg">{text}</span>
  </li>
);