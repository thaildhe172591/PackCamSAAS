"use client";

import { Button } from "@/components/ui/button";
import { openContactWidget } from "@/components/contact-widget";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckIcon } from "@radix-ui/react-icons";
import { Download, MessageCircle, Send, Sparkles, Star } from "lucide-react";
import { PLAN_CODE, telegramBuyLink } from "@/lib/telegram";
import { DOWNLOAD_URL as INSTALLER } from "@/lib/download";


/**
 * Mỗi gói có một nút chính và (tuỳ chọn) một link phụ. Trước đây ba cờ rời rạc — `ctaIcon`,
 * `opensContactOnClick`, `href` — phải đọc chéo nhau mới biết nút làm gì; tách hẳn thành
 * primary/secondary để nhìn là biết, và để đổi thứ tự ưu tiên chỉ cần hoán hai dòng dữ liệu.
 */
type Cta = {
  label: string;
  kind: "telegram" | "download" | "contact";
  href?: string;
};

type Plan = {
  name: string;
  price: string;
  priceSuffix: string;
  desc: string;
  isMostPop: boolean;
  primary: Cta;
  secondary?: Cta;
  features: string[];
  roadmap?: string[];
};

/**
 * Bảng gói phải khớp hai nguồn sự thật, không được tự chế:
 *
 * 1. `PLAN_CATALOG` trong repo `packcam-license-manager` — số bàn, thời hạn, giá. Đó là thứ
 *    tool cấp key thực sự phát ra, nên trang bán hàng hứa khác đi là hứa thứ không giao được.
 * 2. Tính năng **đã chạy thật** trong PackCam, không phải danh mục feature id. Danh mục có 17
 *    cờ nhưng phần lớn mới là chỗ dành sẵn; chỉ liệt kê ở đây thứ khách bật lên là dùng được.
 *
 * Mọi thứ đang phát triển đều phải ghi rõ là lộ trình, không trộn vào danh sách tính năng.
 */
const plans: Plan[] = [
  {
    name: "Dùng thử",
    price: "Miễn phí",
    priceSuffix: "7 ngày",
    desc: "Chạy thử toàn bộ trên dữ liệu thật của shop.",
    isMostPop: false,
    // Gói thử phải tải file trước rồi mới xin key, nên tải-về là nút chính. Và link Telegram
    // ở đây KHÔNG mang payload: trial chỉ admin phát tay, bot không mở wizard cho nó.
    primary: { label: "Tải PackCam về máy", kind: "download", href: INSTALLER },
    secondary: { label: "Xin key dùng thử qua Telegram", kind: "telegram", href: telegramBuyLink() },
    features: [
      "2 bàn đóng gói",
      "Mở đủ tính năng như gói Pro",
      "Không giới hạn số video",
      "Dữ liệu giữ nguyên khi chuyển sang gói trả phí",
      "Cần key do nhà cung cấp phát, phần mềm không tự mở dùng thử",
    ],
  },
  {
    name: "Standard",
    price: "4.900.000đ",
    priceSuffix: "trọn đời",
    desc: "Mua một lần, dùng vĩnh viễn trên 1 máy.",
    isMostPop: false,
    primary: {
      label: "Mua qua Telegram",
      kind: "telegram",
      href: telegramBuyLink(PLAN_CODE.standard),
    },
    secondary: { label: "Tải bản cài đặt", kind: "download", href: INSTALLER },
    features: [
      "2 bàn đóng gói",
      "Quay bằng chứng, khắc mã vận đơn lên khung hình",
      "Tra cứu video theo mã, nhân viên, bàn, ngày",
      "Nhập đơn từ file Excel/CSV của sàn",
      "Bảng tổng quan sản lượng",
      "Quản lý nhân viên và phân quyền",
      "Không phí duy trì, không cần internet",
    ],
  },
  {
    name: "Pro",
    price: "12.900.000đ",
    priceSuffix: "/năm",
    desc: "Cho kho nhiều bàn, cần giám sát và đối soát.",
    isMostPop: true,
    primary: {
      label: "Mua qua Telegram",
      kind: "telegram",
      href: telegramBuyLink(PLAN_CODE.pro),
    },
    secondary: { label: "Tải bản cài đặt", kind: "download", href: INSTALLER },
    features: [
      "8 bàn đóng gói",
      "Camera IP / đầu ghi NVR, không chỉ webcam USB",
      "Màn quản lý đơn: mỗi đơn quay mấy lần, thời lượng trung bình",
      "Theo dõi trực tiếp: bàn nào đang quay đơn nào, kèm hình",
      "Gợi ý đơn ngay khi gõ mã vận đơn",
      "Cảnh báo đơn bị quay trùng",
      "Hỗ trợ ưu tiên",
      "Đủ tính năng gói Standard",
    ],
  },
  {
    name: "Enterprise",
    price: "Liên hệ",
    priceSuffix: "",
    desc: "Cho chuỗi nhiều kho cần triển khai riêng.",
    isMostPop: false,
    // Enterprise cố ý KHÔNG deep link: gói này gồm khảo sát, cài tại chỗ và SLA thoả thuận —
    // những thứ wizard trong bot không chốt được. Đẩy khách vào wizard là hứa sai hình thức bán.
    primary: { label: "Liên hệ triển khai riêng", kind: "contact" },
    features: [
      "Không giới hạn số bàn đóng gói",
      "Cài đặt và cấu hình tại chỗ",
      "Đào tạo nhân sự vận hành",
      "SLA hỗ trợ theo thoả thuận",
      "Đủ tính năng gói Pro",
    ],
    roadmap: [
      "Đồng bộ nhiều chi nhánh",
      "Xem video từ xa",
      "Link chia sẻ bằng chứng cho sàn",
      "Kết nối API sàn",
    ],
  },
];

// 7 ngày chứ không phải 45: `PLANS.trial` bên bot phát đúng 7 ngày (45 là gói `poc` dành cho
// doanh nghiệp chạy thử trước khi ký). Hứa 45 ở đây là hứa thứ công cụ cấp key không giao.
const conversionCues = [
  "Standard mua một lần, dùng vĩnh viễn — không phí duy trì hằng tháng",
  "Dùng thử 7 ngày mở đủ tính năng, trên dữ liệu thật của shop",
  "Chọn gói và nhận key ngay trong Telegram, không cần chờ tư vấn",
];

const CTA_ICON = {
  telegram: Send,
  download: Download,
  contact: MessageCircle,
} as const;

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

        <div className="mx-auto grid w-full items-start gap-4 md:grid-cols-2 xl:grid-cols-[0.95fr_1fr_1.2fr_1fr] xl:gap-4">
          {plans.map((plan, index) => {
            const PrimaryIcon = CTA_ICON[plan.primary.kind];
            const SecondaryIcon = plan.secondary
              ? CTA_ICON[plan.secondary.kind]
              : null;

            return (
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

                  {/* Lộ trình tách hẳn khỏi danh sách tính năng và ghi rõ là chưa có. Trộn thứ
                      chưa xây vào danh sách tính năng là bán thứ không giao được. */}
                  {plan.roadmap && (
                    <div className="mt-4 rounded-lg border border-zinc-800 bg-black/35 p-3">
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                        Đang phát triển
                      </p>
                      <ul className="grid gap-y-1.5">
                        {plan.roadmap.map((item) => (
                          <li key={item} className="text-xs leading-4 text-zinc-500">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>

                <CardFooter
                  className={`flex flex-col gap-2.5 px-5 pb-5 pt-3 ${plan.isMostPop ? "xl:px-7 xl:pb-7 xl:pt-3" : ""}`}
                >
                  <Button
                    asChild
                    className={`packcam-cta-shimmer w-full rounded-lg border font-semibold [&_svg]:text-current ${
                      plan.isMostPop
                        ? "border-transparent bg-[#ffe4d0] text-[#24150c] hover:bg-white"
                        : "border-[#ffd0ad] bg-[#fff3e8] text-[#24150c] hover:border-[#ffb15c] hover:bg-white"
                    }`}
                    variant={plan.isMostPop ? "secondary" : "outline"}
                    size="lg"
                  >
                    <a
                      href={plan.primary.href ?? "#contact"}
                      download={plan.primary.kind === "download" ? true : undefined}
                      target={plan.primary.kind === "telegram" ? "_blank" : undefined}
                      rel={plan.primary.kind === "telegram" ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-2"
                      onClick={(event) => {
                        if (plan.primary.kind === "contact") {
                          event.preventDefault();
                          openContactWidget();
                        }
                      }}
                    >
                      {plan.primary.label}
                      <PrimaryIcon className="size-4" />
                    </a>
                  </Button>

                  {plan.secondary && SecondaryIcon && (
                    <a
                      href={plan.secondary.href ?? "#contact"}
                      download={
                        plan.secondary.kind === "download" ? true : undefined
                      }
                      target={
                        plan.secondary.kind === "telegram" ? "_blank" : undefined
                      }
                      rel={
                        plan.secondary.kind === "telegram" ? "noreferrer" : undefined
                      }
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 underline-offset-4 transition-colors hover:text-[#ffb15c] hover:underline"
                    >
                      <SecondaryIcon className="size-3.5" />
                      {plan.secondary.label}
                    </a>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
