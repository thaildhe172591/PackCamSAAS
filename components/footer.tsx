import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  Download,
  Facebook,
  Mail,
  MapPin,
  Phone,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { DOWNLOAD_URL, LATEST_VERSION } from "@/lib/download";
import { COMPANY } from "@/lib/company";
import Image from "next/image";
import Link from "next/link";

/*
  Bố cục theo footer các công ty bảo hiểm (PJICO, MIC): nền màu thương hiệu đậm, khối thông tin
  doanh nghiệp có icon ở trên, hotline lớn bên phải, rồi mới đến các cột điều hướng. Song ngữ
  Việt–Anh vì người đọc gồm cả bộ duyệt hồ sơ nước ngoài.

  Không bọc framer-motion như các section khác: motion render sẵn `opacity: 0` vào HTML, mà khối
  thông tin doanh nghiệp ở đây là thứ bot xác minh cần đọc được khi không chạy JS.

  Zalo và Telegram tạm ẩn khỏi footer; nút chat nổi và nút mua ở bảng giá vẫn dùng hai kênh này.
*/

const footerLinks = [
  { name: "Tính năng", href: "/#features" },
  { name: "Banner", href: "/#banners" },
  { name: "Poster", href: "/#posters" },
  { name: "Bảng giá", href: "/#pricing" },
  { name: "FAQ", href: "/#faq" },
  { name: "Liên hệ", href: "/#contact" },
  { name: "Giới thiệu", href: "/about" },
];

const [foundedYear, foundedMonth] = COMPANY.foundingDate.split("-");
const phoneDisplay = COMPANY.phone.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3");
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const companyInfo: { icon: LucideIcon; label: string; sub?: string; href?: string }[] = [
  {
    icon: MapPin,
    label: `${COMPANY.street}, ${COMPANY.city}, ${COMPANY.country}`,
    sub: `${COMPANY.streetEn}, ${COMPANY.cityEn}, ${COMPANY.countryEn}`,
  },
  { icon: Mail, label: COMPANY.email, href: `mailto:${COMPANY.email}` },
  {
    icon: UserRound,
    label: `Nhà sáng lập · Founder: ${COMPANY.founder.name}`,
    href: COMPANY.founder.linkedin,
  },
  { icon: CalendarDays, label: `Thành lập · Founded: ${foundedMonth}/${foundedYear}` },
];

const muted = "text-[#d3b9aa]";

function ColumnTitle({ vi, en }: { vi: string; en: string }) {
  return (
    <h3 className="mb-6 text-base font-bold text-white after:mt-3 after:block after:h-0.5 after:w-12 after:rounded-full after:bg-primary">
      {vi}
      <span className={`block text-xs font-medium ${muted}`}>{en}</span>
    </h3>
  );
}

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#24150c] text-white">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-12 lg:px-8 lg:pt-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-5">
            <Link href="/" className="flex w-fit items-center gap-3">
              <span className="relative size-12 overflow-hidden rounded-xl bg-white">
                <Image
                  src="/packcam/packcam-app-icon-1.png"
                  alt="Biểu tượng PackCam"
                  fill
                  className="object-cover"
                />
              </span>
              <span className="text-3xl font-extrabold tracking-tight">PackCam</span>
            </Link>

            <div className="space-y-1">
              <p className="text-lg font-bold">{COMPANY.legalName}</p>
              <p className={`text-sm ${muted}`}>{COMPANY.legalNameEn}</p>
              {COMPANY.pendingVi && (
                <p className="!mt-3 w-fit rounded-lg border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-[#ffb15c]">
                  {capitalize(COMPANY.pendingVi)} · {capitalize(COMPANY.pendingEn)}
                </p>
              )}
            </div>

            <ul className={`space-y-3 text-sm ${muted}`}>
              {companyInfo.map(({ icon: Icon, label, sub, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>
                    {href ? (
                      <a
                        href={href}
                        className="transition-colors hover:text-white"
                        {...(href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}
                      >
                        {label}
                      </a>
                    ) : (
                      label
                    )}
                    {sub && <span className="block text-xs opacity-75">{sub}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 lg:text-right">
            <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${muted}`}>
              Hotline
            </p>
            <a
              href={`tel:${COMPANY.phone}`}
              className="!mt-1 inline-flex items-center gap-3 text-3xl font-extrabold tracking-tight transition-colors hover:text-primary"
            >
              <Phone className="size-6 text-primary" />
              {phoneDisplay}
            </a>
            <p className={`italic ${muted}`}>Theo dõi PackCam · Follow us</p>
            <div className="flex gap-2 lg:justify-end">
              <a
                href={COMPANY.sameAs[0]}
                target="_blank"
                rel="noreferrer"
                aria-label="Fanpage Facebook"
                className="flex size-10 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-primary hover:bg-primary"
              >
                <Facebook className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 h-px bg-white/10" />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <ColumnTitle vi="Điều hướng nhanh" en="Quick links" />
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {footerLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${muted} transition-colors hover:text-white`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <ColumnTitle vi="Liên hệ hợp tác" en="Get in touch" />
            <p className={`text-sm leading-7 ${muted}`}>
              Tư vấn triển khai và báo giá cho kho của bạn.
              <span className="block text-xs opacity-75">
                Deployment and pricing for your warehouse.
              </span>
            </p>
            <Button asChild className="mt-4 rounded-lg uppercase">
              <a href={`mailto:${COMPANY.email}`}>
                Gửi email · Email us
                <Mail className="size-4" />
              </a>
            </Button>
          </div>

          <div>
            <ColumnTitle vi="Tải ứng dụng" en="Download" />
            <p className={`text-sm leading-7 ${muted}`}>
              Bản cài PackCam cho Windows 64-bit.
              <span className="block text-xs opacity-75">PackCam installer for Windows 64-bit.</span>
            </p>
            <Button asChild className="mt-4 rounded-lg uppercase">
              <a href={DOWNLOAD_URL}>
                Tải PackCam · {LATEST_VERSION}
                <Download className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* pr-16 chừa chỗ cho nút chat nổi (ContactWidget) — không có thì nó đè lên email. */}
        <div
          className={`mt-12 flex flex-col gap-2 border-t border-white/10 pr-16 pt-5 text-sm ${muted} sm:flex-row sm:flex-wrap sm:justify-between`}
        >
          <span>© {year} {COMPANY.name}. All rights reserved.</span>
          <span>
            Founded by {COMPANY.founder.name} · {COMPANY.cityEn}, {COMPANY.countryEn} ·{" "}
            <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
              {COMPANY.email}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
