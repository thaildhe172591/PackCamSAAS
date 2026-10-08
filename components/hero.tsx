"use client";

import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, MessageCircle, MonitorPlay, ShieldCheck, WifiOff } from "lucide-react";
import { DOWNLOAD_URL, LATEST_VERSION } from "@/lib/download";
import { openContactWidget } from "@/components/contact-widget";
import { Eyebrow, Reveal, Stagger, StaggerItem } from "@/components/primitives";
import Image from "next/image";
import Link from "next/link";

/**
 * Ba ô "Quay tự động / Lưu trữ an toàn / Tra cứu nhanh" trước đây nằm ở đây đã bị bỏ: chúng lặp
 * gần như nguyên văn ba trong sáu tính năng của section #features ngay bên dưới. Khách cuộn qua
 * hai lần cùng một nội dung sẽ thấy trang dài mà không biết thêm gì. Thay bằng ba dữ kiện mua
 * hàng chưa xuất hiện ở đâu khác: chạy trên gì, có cần mạng không, thử được bao lâu.
 */
const buyingFacts = [
  { label: "Windows 10/11", detail: "Cài trực tiếp, không cần máy chủ", icon: MonitorPlay },
  { label: "Chạy offline", detail: "Video nằm trên máy của bạn", icon: WifiOff },
  { label: "Thử 7 ngày", detail: "Mở đủ tính năng gói Pro", icon: ShieldCheck },
];

// Chip nổi trên ảnh: mỗi cái trôi lệch pha nhau nên cụm không "đập" cùng nhịp như đèn nháy.
const floatingChips = [
  { text: "Đơn #SPX0293841 · 00:42", className: "left-[2%] top-[12%]", delay: 0 },
  { text: "Bàn 3 · đang quay", className: "right-[3%] top-[38%]", delay: 1.1 },
  { text: "Đã lưu bằng chứng", className: "left-[8%] bottom-[10%]", delay: 2.2 },
];

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      {/* Vệt sáng nền: fixed-free, pointer-events-none, không nằm trong container cuộn nên
          không ép GPU vẽ lại liên tục khi lăn chuột. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 size-[620px] rounded-full bg-[radial-gradient(circle,rgba(255,106,0,0.18),transparent_65%)] blur-2xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 lg:grid-cols-[1.02fr_1fr] lg:px-8 lg:py-20">
        <div className="relative z-10 flex flex-col">
          <Reveal y={16}>
            {/* Ngắn lại vì chữ hoa + giãn 0.14em làm nhãn dài gấp rưỡi so với lúc gõ: bản cũ
                "Phần mềm quay đóng gói & khiếu nại" vắt hai dòng ngay ở màn hình 390px. */}
            <Eyebrow>Phần mềm quay đóng gói</Eyebrow>
          </Reveal>

          <Reveal delay={0.06} className="mt-6">
            {/* H1 trước đây chỉ là chữ "PackCam". Tên thương hiệu không nói cho khách biết sản
                phẩm làm gì, và cũng không cho công cụ tìm kiếm biết trang này phục vụ nhu cầu nào. */}
            <h1 className="max-w-2xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
              Mỗi kiện hàng rời kho đều có{" "}
              <span className="relative whitespace-nowrap text-primary">
                video làm chứng
                <svg
                  aria-hidden
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1.5 left-0 h-2.5 w-full text-primary/35"
                >
                  <motion.path
                    d="M2 8 C 80 2, 220 2, 298 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: reduced ? 0 : 0.9, delay: 0.5, ease: "easeOut" }}
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.12} className="mt-6">
            <p className="max-w-xl text-lg leading-8 text-muted-foreground">
              PackCam ghi lại toàn bộ quá trình đóng gói, khắc mã vận đơn lên khung
              hình và cho phép tìm lại đúng đoạn video trong vài giây khi khách báo
              thiếu hàng, sai hàng hoặc móp méo kiện.
            </p>
          </Reveal>

          <Reveal delay={0.18} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="packcam-cta-shimmer rounded-lg px-6 shadow-sm"
            >
              <a href={DOWNLOAD_URL}>
                Tải bản cài Windows · {LATEST_VERSION}
                <Download className="size-4" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-lg px-6"
              onClick={openContactWidget}
            >
              Xin key dùng thử
              <MessageCircle className="size-4" />
            </Button>

            <Button asChild variant="ghost" size="lg" className="rounded-lg px-4">
              <Link href="#pricing">
                Xem bảng giá
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>

          {/* Dải dữ kiện: đường kẻ chia thay vì ba hộp card — cùng lượng thông tin, ít khung hơn,
              và không lặp lại hình dạng của lưới tính năng ngay bên dưới. */}
          <Stagger
            delay={0.24}
            className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3"
          >
            {buyingFacts.map((fact) => (
              <StaggerItem
                key={fact.label}
                className="flex items-start gap-3 bg-card/80 p-4 backdrop-blur-sm"
              >
                <fact.icon className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.75} />
                <div>
                  <p className="text-sm font-bold text-foreground">{fact.label}</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{fact.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: reduced ? 1 : 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex min-h-[320px] items-center justify-center lg:min-h-[520px]"
        >
          <Image
            src="/packcam/packcam-hero-illustration-1.png"
            alt="Camera PackCam ghi hình kiện hàng trong quy trình đóng gói"
            width={1536}
            height={1024}
            priority
            className="h-auto w-full max-w-[720px] object-contain drop-shadow-[0_26px_44px_rgba(255,106,0,0.2)]"
            sizes="(max-width: 1024px) 100vw, 52vw"
          />

          {floatingChips.map((chip) => (
            <motion.span
              key={chip.text}
              aria-hidden
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: reduced ? 0 : [0, -7, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 0.6 + chip.delay * 0.15 },
                y: reduced
                  ? { duration: 0 }
                  : { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: chip.delay },
              }}
              className={`absolute hidden rounded-full border border-border bg-card/90 px-3 py-1.5 text-xs font-semibold text-foreground shadow-[0_10px_28px_rgba(255,106,0,0.14)] backdrop-blur-md md:inline-flex ${chip.className}`}
            >
              <span className="mr-2 mt-[3px] size-1.5 shrink-0 rounded-full bg-primary" />
              {chip.text}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
