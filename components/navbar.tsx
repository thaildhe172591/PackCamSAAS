"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
  { name: "Tính năng", href: "#features" },
  { name: "Minh bạch", href: "#banners" },
  { name: "Khiếu nại", href: "#posters" },
  { name: "Bảng giá", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Liên hệ", href: "#contact" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isCompact = isScrolled || isMenuOpen;

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isCompact
          ? "border-border/80 bg-background/92 backdrop-blur-xl"
          : "border-transparent bg-background/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative size-11 overflow-hidden rounded-lg border border-white bg-white shadow-sm">
            <Image
              src="/packcam/packcam-app-icon-1.png"
              alt="Biểu tượng PackCam"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold text-foreground">PackCam</span>
            <span className="text-xs text-muted-foreground">
              Quay đóng gói và khiếu nại
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {menuItems.map((item) => (
            <Button key={item.name} asChild variant="ghost" size="sm">
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild size="lg" className="rounded-lg px-5 shadow-sm">
            <a href="/downloads/PackCam_0.4.0_x64-setup.exe">
              Tải Windows
              <Download className="size-4" />
            </a>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="overflow-hidden border-t border-border/70 bg-background md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Link
                    href={item.href}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <Button asChild size="lg" className="mt-2 rounded-lg">
                <a
                  href="/downloads/PackCam_0.4.0_x64-setup.exe"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tải bản cài Windows
                  <Download className="size-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
