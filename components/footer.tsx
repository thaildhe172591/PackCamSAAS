"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { name: "Tính năng", href: "#features" },
  { name: "Banner", href: "#banners" },
  { name: "Poster", href: "#posters" },
  { name: "Bảng giá", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr_0.8fr]"
        >
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative size-12 overflow-hidden rounded-lg border border-border bg-white shadow-sm">
                <Image
                  src="/packcam/packcam-app-icon-1.png"
                  alt="Biểu tượng PackCam"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xl font-extrabold text-foreground">PackCam</p>
                <p className="text-sm text-muted-foreground">
                  Quản lý quay đóng gói và khiếu nại chuyên nghiệp
                </p>
              </div>
            </Link>

            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              PackCam giúp doanh nghiệp lưu lại bằng chứng đóng gói, bảo vệ uy tín
              dịch vụ và xử lý khiếu nại dựa trên dữ liệu rõ ràng.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase text-primary">
              Điều hướng nhanh
            </h3>
            <div className="flex flex-col gap-2">
              {footerLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase text-primary">
              Tải ứng dụng
            </h3>
            <p className="text-sm leading-7 text-muted-foreground">
              Tải trực tiếp bản cài PackCam cho Windows 64-bit.
            </p>
            <Button asChild className="rounded-lg shadow-sm">
              <a href="/downloads/PackCam_0.4.0_x64-setup.exe">
                Tải PackCam
                <Download className="size-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        <div className="mt-8 border-t border-border pt-5 text-sm text-muted-foreground">
          © {year} PackCam. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
