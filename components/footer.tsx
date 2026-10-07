"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Download,
  ExternalLink,
  Mail,
  MessageCircle,
  PhoneCall,
  Send,
  type LucideIcon,
} from "lucide-react";
import { telegramBuyLink } from "@/lib/telegram";
import { DOWNLOAD_URL, LATEST_VERSION } from "@/lib/download";
import { COMPANY } from "@/lib/company";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { name: "Tính năng", href: "/#features" },
  { name: "Banner", href: "/#banners" },
  { name: "Poster", href: "/#posters" },
  { name: "Bảng giá", href: "/#pricing" },
  { name: "FAQ", href: "/#faq" },
  { name: "Liên hệ", href: "/#contact" },
  { name: "Giới thiệu", href: "/about" },
];

const contactLinks: {
  name: string;
  value: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    name: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    icon: Mail,
  },
  {
    name: "Fanpage",
    value: "facebook.com/packcampage",
    href: "https://www.facebook.com/packcampage",
    icon: MessageCircle,
  },
  {
    name: "Zalo",
    value: "0387048191",
    href: "https://zalo.me/0387048191",
    icon: PhoneCall,
  },
  {
    name: "Telegram",
    value: "@packcambot — báo giá & phát key 24/7",
    href: telegramBuyLink(),
    icon: Send,
  },
];

// "2026-01" → "Tháng 01/2026"
const [foundedYear, foundedMonth] = COMPANY.foundingDate.split("-");
const foundedVi = `Tháng ${foundedMonth}/${foundedYear}`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.65fr_1fr_0.8fr]"
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

            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-sm">
              <dt className="text-muted-foreground">Nhà sáng lập</dt>
              <dd className="font-medium text-foreground">
                <a
                  href={COMPANY.founder.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="underline-offset-4 hover:underline"
                >
                  {COMPANY.founder.name}
                </a>
              </dd>
              <dt className="text-muted-foreground">Thành lập</dt>
              <dd className="font-medium text-foreground">{foundedVi}</dd>
              <dt className="text-muted-foreground">Địa chỉ</dt>
              <dd className="font-medium text-foreground">
                {COMPANY.city}, {COMPANY.country}
              </dd>
            </dl>
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
              Liên hệ triển khai
            </h3>
            <div className="rounded-xl border border-orange-200 bg-[#fff7ed] p-3 shadow-sm">
              <div className="space-y-2">
                {contactLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      {...(item.href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}
                      className="group flex items-center justify-between gap-3 rounded-lg bg-white/70 px-3 py-3 text-sm transition-all hover:bg-white hover:shadow-sm"
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#090909] text-primary">
                          <Icon className="size-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-semibold text-foreground">
                            {item.name}
                          </span>
                          <span className="block truncate text-muted-foreground">
                            {item.value}
                          </span>
                        </span>
                      </span>
                      <ExternalLink className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                    </a>
                  );
                })}
              </div>
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
              <a href={DOWNLOAD_URL}>
                Tải PackCam · {LATEST_VERSION}
                <Download className="size-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* pr-16 chừa chỗ cho nút chat nổi (ContactWidget) — không có thì nó đè lên email. */}
        <div className="mt-8 flex flex-col gap-2 border-t border-border pr-16 pt-5 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:justify-between">
          <span>© {year} {COMPANY.name}. All rights reserved.</span>
          <span>
            Founded by {COMPANY.founder.name} · {COMPANY.cityEn}, {COMPANY.countryEn} ·{" "}
            <a href={`mailto:${COMPANY.email}`} className="hover:text-foreground">
              {COMPANY.email}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
