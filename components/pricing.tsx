"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckIcon } from "@radix-ui/react-icons";
import { Download } from "lucide-react";

const plans = [
  {
    name: "Free Trial 14 ngày thử full tính năng",
    desc: "Phù hợp cho doanh nghiệp nhỏ muốn bắt đầu ghi hình đóng gói.",
    price: "0đ",
    isMostPop: false,
    cta: "Tải bản dùng thử",
    href: "/downloads/PackCam_0.4.0_x64-setup.exe",
    features: [
      "Quay video theo ca làm việc",
      "Lưu trữ cơ bản theo phiên",
      "Tra cứu nhanh theo mốc thời gian",
    ],
  },
  {
    name: "Pro",
    desc: "Lựa chọn tối ưu cho đội vận hành cần kiểm soát chặt hơn.",
    price: "2.900.000đ",
    isMostPop: true,
    cta: "Chọn gói Pro",
    href: "/downloads/PackCam_0.4.0_x64-setup.exe",
    features: [
      "Bao gồm mọi tính năng gói Starter",
      "Theo dõi nhiều camera và nhiều khu vực",
      "Dò tìm theo đơn hàng và trạng thái xử lý",
      "Hỗ trợ triển khai ban đầu",
      "Tối ưu cho đội CSKH và kho vận",
    ],
  },
  {
    name: "Enterprise",
    desc: "Dành cho chuỗi vận hành lớn cần cấu hình và hỗ trợ riêng.",
    price: "Liên hệ",
    isMostPop: false,
    cta: "Tư vấn triển khai",
    href: "/downloads/PackCam_0.4.0_x64-setup.exe",
    features: [
      "Bao gồm mọi tính năng của gói Pro",
      "Triển khai theo mô hình nhiều kho, nhiều điểm",
      "Tùy biến nhận diện và quy trình",
      "Hỗ trợ phối hợp với đội kỹ thuật nội bộ",
      "Thiết kế theo SLA và nhu cầu thực tế",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="w-full bg-[#090909] px-4 py-16 text-white lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 flex flex-col gap-3 text-center"
        >
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Choose Your Plan
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-300">
            Chọn gói PackCam phù hợp với quy mô vận hành, số lượng camera và nhu cầu
            lưu trữ của doanh nghiệp.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`relative ${plan.isMostPop ? "lg:-mt-2" : ""}`}
            >
              <Card
                className={`relative h-full rounded-lg border bg-[#151515] text-white ${
                  plan.isMostPop
                    ? "border-zinc-100 shadow-[0_0_0_1px_rgba(255,255,255,0.72)]"
                    : "border-zinc-800"
                }`}
              >
                {plan.isMostPop && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full border border-zinc-100 bg-[#090909] px-4 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardContent className="p-6 pt-8">
                  <div className="mb-5 text-center">
                    <h3 className="mb-2 text-xl font-semibold">{plan.name}</h3>
                    <p className="mb-4 text-sm text-zinc-400">{plan.desc}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.price !== "Liên hệ" && (
                        <span className="ml-1 text-sm text-zinc-400">/tháng</span>
                      )}
                    </div>
                  </div>

                  <Separator className="my-6 bg-zinc-800" />

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button
                    asChild
                    className="w-full rounded-lg"
                    variant={plan.isMostPop ? "secondary" : "outline"}
                    size="lg"
                  >
                    <a href={plan.href}>
                      {plan.cta}
                      <Download className="size-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
