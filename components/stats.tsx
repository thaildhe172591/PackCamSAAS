"use client";

import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import { CalendarClock, Clock, LayoutGrid, WalletMinimal } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/primitives";
import { useState } from "react";

/**
 * Bốn con số cũ — 24/7, "4 bước", "30+ ngày", "100% minh bạch" — không nói được điều gì kiểm
 * chứng được: "4 bước" là cách đếm tự đặt, "100%" là khẩu hiệu. Thay bằng bốn con số khách phải
 * biết trước khi quyết định mua, và cả bốn đều khớp `PLAN_CATALOG` bên tool cấp key nên bảng giá
 * bên dưới không mâu thuẫn với dải này.
 */
const stats = [
  {
    value: 24,
    suffix: "/7",
    label: "Ghi hình liên tục",
    detail: "Chạy suốt ca, không phụ thuộc vào ghi chép thủ công.",
    icon: Clock,
  },
  {
    value: 8,
    suffix: " bàn",
    label: "Số bàn tối đa",
    detail: "Gói Pro quản lý tới 8 bàn đóng gói trong cùng một kho.",
    icon: LayoutGrid,
  },
  {
    value: 7,
    suffix: " ngày",
    label: "Dùng thử miễn phí",
    detail: "Mở đủ tính năng gói Pro, chạy trên dữ liệu thật của shop.",
    icon: CalendarClock,
  },
  {
    value: 0,
    suffix: "đ",
    label: "Phí duy trì Standard",
    detail: "Mua một lần, không thu thêm hằng tháng, không cần internet.",
    icon: WalletMinimal,
  },
];

export default function Stats() {
  const [animate, setAnimate] = useState(false);

  return (
    <section className="px-4 py-8 lg:px-8 lg:py-12">
      <motion.div
        className="mx-auto max-w-7xl"
        onViewportEnter={() => setAnimate(true)}
        viewport={{ once: true, amount: 0.35 }}
      >
        {/* Một tấm duy nhất chia bằng đường kẻ, thay vì bốn hộp rời. Bốn hộp trắng ở đây lặp
            đúng hình dạng của lưới tính năng phía trên, khiến hai section đọc như một. */}
        <Stagger className="grid gap-px overflow-hidden rounded-2xl border border-primary/20 bg-border/70 shadow-[0_24px_60px_-40px_rgba(120,60,10,0.5)] sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem
              key={stat.label}
              className="group bg-[linear-gradient(180deg,rgba(255,241,230,0.9),rgba(255,253,251,0.95))] p-6 transition-colors duration-300 hover:bg-primary/6 lg:p-7"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/12 text-primary transition-transform duration-300 group-hover:scale-110">
                  <stat.icon className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </h3>
              </div>

              <div className="text-4xl font-extrabold tracking-tight text-foreground lg:text-[2.75rem]">
                <NumberFlow value={animate ? stat.value : 0} />
                <span className="text-primary">{stat.suffix}</span>
              </div>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">{stat.detail}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </motion.div>
    </section>
  );
}
