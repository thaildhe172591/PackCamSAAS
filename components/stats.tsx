"use client";

import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import { BadgeCheck, Clock, HardDrive, SearchCheck } from "lucide-react";
import { useState } from "react";

const stats = [
  {
    value: 24,
    suffix: "/7",
    label: "Ghi hình liên tục",
    detail: "Theo dõi các ca đóng gói trong ngày, không phụ thuộc vào ghi chép thủ công.",
    icon: Clock,
  },
  {
    value: 4,
    suffix: " bước",
    label: "Tra cứu đơn hàng",
    detail: "Lọc nhanh theo đơn, thời gian, camera và trạng thái để tìm đúng video cần xem.",
    icon: SearchCheck,
  },
  {
    value: 30,
    suffix: "+ ngày",
    label: "Lưu trữ linh hoạt",
    detail: "Có thể cấu hình thời gian lưu theo nhu cầu vận hành và chính sách dữ liệu.",
    icon: HardDrive,
  },
  {
    value: 100,
    suffix: "%",
    label: "Minh bạch xử lý",
    detail: "Tạo cơ sở đối soát rõ ràng giữa kho, CSKH, vận chuyển và khách hàng.",
    icon: BadgeCheck,
  },
];

export default function Stats() {
  const [animate, setAnimate] = useState(false);

  return (
    <section className="px-4 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
          onViewportEnter={() => setAnimate(true)}
          viewport={{ once: true, amount: 0.45 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-lg border border-border bg-white p-6 shadow-sm"
            >
              <div className="mb-5 flex size-12 items-center justify-center rounded-lg bg-primary/12 text-primary">
                <stat.icon className="size-5" />
              </div>
              <div className="text-4xl font-extrabold text-foreground">
                <NumberFlow value={animate ? stat.value : 0} />
                {stat.suffix}
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground">{stat.label}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
