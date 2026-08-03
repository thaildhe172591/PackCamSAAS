"use client";

import { Button } from "@/components/ui/button";
import { openContactWidget } from "@/components/contact-widget";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckIcon } from "@radix-ui/react-icons";
import { Download, MessageCircle, Sparkles, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "0đ",
    priceSuffix: "/tháng",
    desc: "Dành cho shop mới bắt đầu.",
    isMostPop: false,
    cta: "Bắt đầu miễn phí",
    ctaIcon: "download",
    href: "/downloads/PackCam_0.4.0_x64-setup.exe",
    features: [
      "1 bàn đóng gói",
      "Ghi hình theo ca",
      "Lưu trữ video 7 ngày",
      "Tra cứu theo thời gian",
      "1 tài khoản quản trị",
      "Dùng thử đầy đủ tính năng trong 14 ngày đầu",
    ],
  },
  {
    name: "Standard",
    price: "399.000đ",
    priceSuffix: "/tháng",
    desc: "Dành cho shop đang phát triển.",
    isMostPop: false,
    cta: "Tải về & tư vấn",
    ctaIcon: "download",
    opensContactOnClick: true,
    href: "/downloads/PackCam_0.4.0_x64-setup.exe",
    features: [
      "1 bàn đóng gói",
      "Lưu trữ 30 ngày",
      "Tra cứu theo mã đơn",
      "Xuất video nhanh",
      "3 tài khoản sử dụng",
      "Hỗ trợ cài đặt từ xa",
      "Đủ tính năng gói Starter",
    ],
  },
  {
    name: "Pro",
    price: "699.000đ",
    priceSuffix: "/tháng",
    desc: "Gói khuyến nghị cho shop vừa.",
    isMostPop: true,
    cta: "Tải về & tư vấn",
    ctaIcon: "download",
    opensContactOnClick: true,
    href: "/downloads/PackCam_0.4.0_x64-setup.exe",
    features: [
      "3 bàn đóng gói",
      "Dashboard thống kê",
      "Tra cứu theo QR / Barcode",
      "Phân quyền nhân viên",
      "Backup tự động",
      "Hỗ trợ ưu tiên",
      "Đủ tính năng gói Standard",
    ],
  },
  {
    name: "Business",
    price: "1.490.000đ",
    priceSuffix: "/tháng",
    desc: "Dành cho kho vận hành lớn.",
    isMostPop: false,
    cta: "Tư vấn gói Business",
    ctaIcon: "contact",
    href: "#contact",
    features: [
      "5 bàn đóng gói",
      "Quản lý nhiều kho",
      "Báo cáo thống kê",
      "API tích hợp Shopee",
      "Đồng bộ NAS/Server",
      "Hỗ trợ triển khai từ xa",
      "Đủ tính năng gói Pro",
    ],
  },
  {
    name: "Enterprise",
    price: "Liên hệ",
    priceSuffix: "",
    desc: "Cho chuỗi kho cần triển khai riêng.",
    isMostPop: false,
    cta: "Liên hệ triển khai riêng",
    ctaIcon: "contact",
    href: "#contact",
    features: [
      "Không giới hạn bàn",
      "Không giới hạn người dùng",
      "Cloud hoặc On-premise",
      "API tùy chỉnh ERP/WMS",
      "SLA cam kết",
      "Hỗ trợ riêng & đào tạo",
      "Đủ tính năng gói Business",
    ],
  },
];

const conversionCues = [
  "Gói Pro phù hợp nhất cho shop đang tăng đơn",
  "Tải về xong inbox để được tư vấn cấu hình bàn đóng gói",
  "Hỗ trợ qua Fanpage, Zalo, Telegram và điện thoại",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="w-full bg-[#090909] px-4 py-16 text-white lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1408px]">
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
            Chọn gói PackCam theo số bàn đóng gói, số lượng tài khoản và quy mô
            vận hành hiện tại của shop.
          </p>

          <div className="mx-auto mt-3 flex max-w-4xl flex-wrap justify-center gap-2">
            {conversionCues.map((cue, index) => (
              <motion.span
                key={cue}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 + index * 0.06 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#ff9d57]/35 bg-[#ff7a1a]/10 px-3 py-1.5 text-xs font-medium text-[#ffd9bd]"
              >
                <Sparkles className="size-3.5 text-primary" />
                {cue}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="mx-auto grid w-full items-start gap-4 md:grid-cols-2 xl:grid-cols-[0.92fr_0.98fr_1.18fr_1fr_1fr] xl:gap-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`relative ${plan.isMostPop ? "z-20 xl:-mt-5 xl:mb-5" : ""}`}
            >
              <Card
                className={`relative flex h-full min-h-[620px] flex-col overflow-visible rounded-xl border text-white transition-transform duration-200 lg:h-[640px] ${
                  plan.isMostPop
                    ? "packcam-popular-card border-[#ffb15c] bg-[linear-gradient(180deg,#23170f_0%,#15110e_62%,#0d0d0d_100%)] shadow-[0_0_0_1px_rgba(255,177,92,0.62),0_28px_90px_rgba(255,125,31,0.28)]"
                    : "border-zinc-800 bg-[#151515]"
                }`}
              >
                {plan.isMostPop && (
                  <div className="pointer-events-none absolute left-4 right-4 top-2 h-px rounded-full bg-gradient-to-r from-transparent via-[#ffb15c]/70 to-transparent opacity-80" />
                )}

                {plan.isMostPop && (
                  <div className="absolute -top-4 left-1/2 z-30 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-[#ffb15c] bg-[#090909] px-4 py-1 text-xs font-semibold text-[#ffb15c] shadow-lg">
                      <Star className="size-3 fill-[#ffb15c]" />
                      Bán nhiều nhất
                    </span>
                  </div>
                )}

                {plan.isMostPop && (
                  <div className="absolute right-4 top-5 z-10 rounded-full border border-[#ffb15c]/45 bg-[#ff7a1a]/15 px-2.5 py-1 text-[11px] font-semibold text-[#ffd9bd]">
                    Nên chọn
                  </div>
                )}

                <CardContent
                  className={`flex flex-1 flex-col ${
                    plan.isMostPop ? "p-6 pt-9 xl:p-7 xl:pt-10" : "p-5 pt-6 xl:p-5"
                  }`}
                >
                  <div className="mb-3">
                    <div>
                      <div className="mb-2 flex items-start justify-between gap-3">
                        <h3
                          className={`font-semibold ${
                            plan.isMostPop ? "text-3xl" : "text-2xl"
                          }`}
                        >
                          {plan.name}
                        </h3>
                      </div>
                      <p className="max-w-sm text-sm leading-5 text-zinc-400">
                        {plan.desc}
                      </p>
                    </div>

                    <div
                      className={`mt-4 rounded-lg border px-4 py-3 ${
                        plan.isMostPop
                          ? "border-[#ffb15c]/60 bg-primary/10"
                          : "border-zinc-800 bg-black/35"
                      }`}
                    >
                      <span
                        className={`font-bold tracking-tight ${
                          plan.isMostPop ? "text-4xl" : "text-3xl"
                        }`}
                      >
                        {plan.price}
                      </span>
                      {plan.priceSuffix && (
                        <span className="ml-1 text-sm text-zinc-400">
                          {plan.priceSuffix}
                        </span>
                      )}
                    </div>
                  </div>

                  <Separator className="my-3 bg-zinc-800" />

                  <ul className="grid gap-y-2">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm leading-5"
                      >
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-zinc-100">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter
                  className={`px-5 pb-5 pt-3 ${plan.isMostPop ? "xl:px-7 xl:pb-7 xl:pt-3" : ""}`}
                >
                  <Button
                    asChild
                    className={`w-full rounded-lg border font-semibold [&_svg]:text-current ${
                      plan.isMostPop
                        ? "packcam-cta-shimmer border-transparent bg-[#ffe4d0] text-[#24150c] hover:bg-white"
                        : plan.ctaIcon === "contact" || plan.opensContactOnClick
                          ? "packcam-cta-shimmer border-[#ffd0ad] bg-[#fff3e8] text-[#24150c] hover:border-[#ffb15c] hover:bg-white"
                          : "border-[#ffd0ad] bg-[#fff3e8] text-[#24150c] hover:border-[#ffb15c] hover:bg-white"
                    }`}
                    variant={plan.isMostPop ? "secondary" : "outline"}
                    size="lg"
                  >
                    <a
                      href={plan.href}
                      download={plan.ctaIcon === "download" ? true : undefined}
                      className="inline-flex items-center gap-2"
                      onClick={(event) => {
                        if (plan.ctaIcon === "contact") {
                          event.preventDefault();
                          openContactWidget();
                          return;
                        }

                        if (plan.opensContactOnClick) {
                          window.setTimeout(openContactWidget, 150);
                        }
                      }}
                    >
                      {plan.cta}
                      {plan.ctaIcon === "contact" ? (
                        <MessageCircle className="size-4" />
                      ) : (
                        <Download className="size-4" />
                      )}
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
