"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Clock3, Download, Search, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    title: "Quay tự động",
    description:
      "Ghi hình quy trình đóng gói liên tục, giảm tranh chấp sau giao hàng.",
    icon: Clock3,
  },
  {
    title: "Lưu trữ an toàn",
    description:
      "Video được quản lý tập trung, dễ phân quyền và truy xuất khi cần.",
    icon: ShieldCheck,
  },
  {
    title: "Tra cứu nhanh",
    description:
      "Tìm theo đơn hàng, thời gian, camera để xử lý khiếu nại chính xác.",
    icon: Search,
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative z-10 flex flex-col justify-center"
        >
          <span className="mb-5 inline-flex w-fit items-center rounded-lg border border-primary/20 bg-white/75 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
            Phần mềm quản lý quay đóng gói và khiếu nại
          </span>

          <h1 className="max-w-3xl text-4xl font-extrabold text-balance text-foreground sm:text-5xl lg:text-6xl">
            PackCam
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Giải pháp giúp doanh nghiệp ghi lại toàn bộ quá trình đóng gói, lưu
            trữ bằng chứng an toàn và tra cứu video nhanh khi phát sinh khiếu nại,
            thất lạc hoặc cần đối soát vận hành.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-lg px-6 shadow-sm">
              <a href="/downloads/PackCam_0.4.0_x64-setup.exe">
                Tải bản cài Windows
                <Download className="size-4" />
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="rounded-lg px-6">
              <Link href="#pricing">
                Xem gói triển khai
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 + index * 0.08 }}
                className="rounded-lg border border-border bg-white/72 p-5 shadow-sm"
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/12 text-primary">
                  <item.icon className="size-5" />
                </div>
                <h2 className="text-base font-bold text-foreground">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
          className="relative flex min-h-[320px] items-center justify-center overflow-visible lg:min-h-[520px]"
        >
          <Image
            src="/packcam/packcam-hero-illustration-1.png"
            alt="Camera PackCam ghi hình kiện hàng trong quy trình đóng gói"
            width={1536}
            height={1024}
            priority
            className="h-auto w-full max-w-[720px] object-contain drop-shadow-[0_26px_44px_rgba(255,106,0,0.2)]"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
