"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Bốn thứ trước đây mỗi section tự chép lại: cùng một khối `initial/whileInView/viewport/
 * transition`, cùng một cụm badge + h2 + lead. Chép bảy chỗ nghĩa là đổi nhịp animation phải
 * sửa bảy file, và thực tế chúng đã lệch nhau (0.45s / 0.5s / 0.55s / 0.6s, delay 0.05 / 0.08)
 * nên trang chạy không cùng một nhịp. Gom về đây để nhịp là MỘT quyết định, không phải bảy.
 */

// Easing "expo out": vào nhanh, dừng mềm. Dùng chung cho mọi chuyển động vào màn hình.
const EASE = [0.16, 1, 0.3, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & { delay?: number; y?: number };

export function Reveal({ delay = 0, y = 22, ...props }: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: EASE }}
      {...props}
    />
  );
}

type StaggerProps = HTMLMotionProps<"div"> & { stagger?: number; delay?: number };

/**
 * Cha và con PHẢI nằm cùng một cây client component thì `staggerChildren` mới chạy — đó là lý do
 * cả hai nằm chung file này thay vì tách ra.
 */
export function Stagger({ stagger = 0.07, delay = 0, ...props }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      {...props}
    />
  );
}

export function StaggerItem({ y = 18, ...props }: HTMLMotionProps<"div"> & { y?: number }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: reduced ? 0 : y },
        show: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 120, damping: 20 },
        },
      }}
      {...props}
    />
  );
}

/**
 * Vệt sáng bám con trỏ. Toạ độ đi qua motion value chứ không qua `useState`: mousemove bắn hàng
 * trăm sự kiện mỗi giây, để React render lại từng lần là giết luôn khung hình trên máy yếu.
 * Motion value ghi thẳng vào style, nằm ngoài chu kỳ render.
 */
export function Spotlight({
  className,
  children,
  tint = "255, 106, 0",
  size = 340,
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & { tint?: string; size?: number }) {
  const mx = useMotionValue(-9999);
  const my = useMotionValue(-9999);
  const background = useMotionTemplate`radial-gradient(${size}px circle at ${mx}px ${my}px, rgba(${tint}, 0.16), transparent 70%)`;

  return (
    <div
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mx.set(event.clientX - rect.left);
        my.set(event.clientY - rect.top);
      }}
      className={cn("group relative", className)}
      {...rest}
    >
      {/* `rounded-[inherit]` thay cho `overflow-hidden` ở thẻ ngoài: cắt vệt sáng theo đúng bo góc
          của thẻ mà không cắt luôn những thứ CỐ Ý tràn ra ngoài — nhãn "Bán nhiều nhất" nhô lên
          trên viền và quầng sáng `packcam-popular-card::before` toả rộng 10px quanh thẻ. */}
      <motion.span
        aria-hidden
        style={{ background }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      {children}
    </div>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "mx-auto max-w-3xl items-center text-center",
        className,
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {lead && (
        <p className="max-w-[62ch] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {lead}
        </p>
      )}
    </Reveal>
  );
}
