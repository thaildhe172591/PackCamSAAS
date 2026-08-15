"use client";

import { Button } from "@/components/ui/button";
import { openContactWidget } from "@/components/contact-widget";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { CheckIcon } from "@radix-ui/react-icons";
import { Download, MessageCircle, Send, Sparkles, Star } from "lucide-react";
import { PLAN_CODE, telegramBuyLink } from "@/lib/telegram";
import { DOWNLOAD_URL } from "@/lib/download";
import { Reveal, Spotlight, Stagger, StaggerItem } from "@/components/primitives";

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
  /** Số bàn đóng gói — thứ duy nhất phân tách bốn gói. Trước đây nó nằm lẫn làm dòng đầu trong
   *  danh sách tính năng, ngang hàng với "hỗ trợ ưu tiên", nên khách phải đọc hết mới so được. */
  desks: string;
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
    desks: "2 bàn",
    isMostPop: false,
    // Gói thử phải tải file trước rồi mới xin key, nên tải-về là nút chính. Và link Telegram
    // ở đây KHÔNG mang payload: trial chỉ admin phát tay, bot không mở wizard cho nó.
    primary: { label: "Tải PackCam về máy", kind: "download", href: DOWNLOAD_URL },
    secondary: { label: "Xin key dùng thử qua Telegram", kind: "telegram", href: telegramBuyLink() },
    features: [
      "Mở đủ tính năng như gói Pro",
      "Không giới hạn số video",
      "Dữ liệu giữ nguyên khi chuyển sang gói trả phí",
      "Hết 7 ngày không tự động thu phí, không cần thẻ",
      "Cần key do nhà cung cấp phát, phần mềm không tự mở dùng thử",
    ],
  },
  {
    name: "Standard",
    price: "4.900.000đ",
    priceSuffix: "trọn đời",
    desc: "Mua một lần, dùng vĩnh viễn trên 1 máy.",
    desks: "2 bàn",
    isMostPop: false,
    primary: {
      label: "Mua qua Telegram",
      kind: "telegram",
      href: telegramBuyLink(PLAN_CODE.standard),
    },
    secondary: { label: "Tải bản cài đặt", kind: "download", href: DOWNLOAD_URL },
    features: [
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
    desks: "8 bàn",
    isMostPop: true,
    primary: {
      label: "Mua qua Telegram",
      kind: "telegram",
      href: telegramBuyLink(PLAN_CODE.pro),
    },
    secondary: { label: "Tải bản cài đặt", kind: "download", href: DOWNLOAD_URL },
    features: [
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
    desks: "Không giới hạn",
    isMostPop: false,
    // Enterprise cố ý KHÔNG deep link: gói này gồm khảo sát, cài tại chỗ và SLA thoả thuận —
    // những thứ wizard trong bot không chốt được. Đẩy khách vào wizard là hứa sai hình thức bán.
    primary: { label: "Liên hệ triển khai riêng", kind: "contact" },
    features: [
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

/** Link/nút mở ra ngoài hay mở widget liên hệ — ba `kind` quyết định cả href, target lẫn hành vi
 *  click, nên gom một chỗ thay vì lặp bốn cụm ternary giống nhau ở nút chính và link phụ. */
function ctaProps(cta: Cta) {
  return {
    href: cta.href ?? "#contact",
    download: cta.kind === "download" ? true : undefined,
    target: cta.kind === "telegram" ? "_blank" : undefined,
    rel: cta.kind === "telegram" ? "noreferrer" : undefined,
    onClick: (event: React.MouseEvent) => {
      if (cta.kind === "contact") {
        event.preventDefault();
        openContactWidget();
      }
    },
  };
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative w-full overflow-hidden bg-[#090909] px-4 py-20 text-white lg:px-8 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,122,26,0.16),transparent_66%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1408px]">
        <Reveal className="mb-12 flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ffb15c]/30 bg-[#ff7a1a]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#ffd9bd]">
            <span className="size-1.5 rounded-full bg-[#ffb15c]" />
            Bảng giá
          </span>

          {/* Tiêu đề cũ là "Choose Your Plan" — dòng tiếng Anh duy nhất trên một trang tiếng Việt,
              đặt ngay chỗ khách sắp rút ví. */}
          <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl">
            Chọn gói theo số bàn đóng gói của kho
          </h2>
          <p className="max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
            Bốn gói khác nhau ở số bàn quay đồng thời và hình thức triển khai. Giá
            dưới đây là giá tool cấp key đang phát, không phải giá tham khảo.
          </p>

          <Stagger className="mt-3 grid w-full max-w-5xl gap-2 sm:grid-cols-3">
            {conversionCues.map((cue) => (
              <StaggerItem
                key={cue}
                y={10}
                className="flex items-start gap-2 rounded-xl border border-[#ff9d57]/25 bg-[#ff7a1a]/8 px-3.5 py-2.5 text-left text-xs font-medium leading-5 text-[#ffd9bd]"
              >
                <Sparkles className="mt-0.5 size-3.5 shrink-0 text-primary" />
                {cue}
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>

        {/*
          Chiều cao cứng `min-h-[620px] lg:h-[640px]` đã bị bỏ. Nó ép mọi thẻ cao bằng thẻ dài
          nhất CỘNG dự phòng, nên gói Dùng thử (bốn dòng tính năng) thừa ~200px trống giữa danh
          sách và nút bấm, còn gói Pro thì hở một mảng dưới nút. Nay chiều cao do nội dung quyết
          định, `items-stretch` của grid lo phần bằng nhau, `mt-auto` ghim chân thẻ xuống đáy —
          bốn nút vẫn thẳng hàng mà không thẻ nào phải độn chỗ trống.
        */}
        <Stagger stagger={0.08} className="grid w-full gap-4 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => {
            const PrimaryIcon = CTA_ICON[plan.primary.kind];
            const SecondaryIcon = plan.secondary ? CTA_ICON[plan.secondary.kind] : null;

            return (
              <StaggerItem
                key={plan.name}
                className={`relative ${plan.isMostPop ? "z-20 xl:-mt-4 xl:mb-4" : ""}`}
              >
                {/* Nhãn nằm NGOÀI thẻ, không nằm trong: nó cố ý nhô lên trên viền, mà thẻ thì có
                    vệt sáng phải cắt theo bo góc. Đặt chung một chỗ thì một trong hai phải hy sinh. */}
                {plan.isMostPop && (
                  <motion.span
                    initial={{ opacity: 0, y: -6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35, type: "spring", stiffness: 220, damping: 16 }}
                    className="absolute -top-3.5 left-1/2 z-30 inline-flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-[#ffb15c] bg-[#090909] px-4 py-1 text-xs font-semibold text-[#ffb15c] shadow-lg"
                  >
                    <Star className="size-3 fill-[#ffb15c]" />
                    Bán nhiều nhất
                  </motion.span>
                )}

                <Spotlight
                  tint={plan.isMostPop ? "255, 177, 92" : "255, 122, 26"}
                  className={`flex h-full flex-col rounded-2xl border text-white transition-[transform,border-color] duration-300 hover:-translate-y-1 ${
                    plan.isMostPop
                      ? "packcam-popular-card border-[#ffb15c] bg-[linear-gradient(180deg,#23170f_0%,#15110e_62%,#0d0d0d_100%)] shadow-[0_0_0_1px_rgba(255,177,92,0.62),0_28px_90px_rgba(255,125,31,0.28)]"
                      : "border-zinc-800 bg-[#151515] hover:border-zinc-700"
                  }`}
                >
                  {plan.isMostPop && (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute left-4 right-4 top-2 h-px rounded-full bg-gradient-to-r from-transparent via-[#ffb15c]/70 to-transparent"
                    />
                  )}

                  <div
                    className={`relative flex flex-1 flex-col ${
                      plan.isMostPop ? "p-6 pt-9 xl:p-7 xl:pt-10" : "p-5 pt-7"
                    }`}
                  >
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <h3
                        className={`font-bold tracking-tight ${
                          plan.isMostPop ? "text-3xl" : "text-2xl"
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <span className="shrink-0 rounded-full border border-[#ffb15c]/40 bg-[#ff7a1a]/12 px-2.5 py-1 text-[11px] font-semibold text-[#ffd9bd]">
                        {plan.desks}
                      </span>
                    </div>

                    <p className="text-sm leading-6 text-zinc-400">{plan.desc}</p>

                    {/* `flex-wrap` + baseline: "12.900.000đ" ở cỡ 2.5rem rộng hơn lòng thẻ, nên
                        đuôi "/năm" bị đẩy lồi ra ngoài khung viền. Cho phép xuống dòng và hạ một
                        nấc cỡ chữ thì con số vẫn là thứ to nhất trong thẻ mà không tràn. */}
                    <div
                      className={`mt-4 flex flex-wrap items-baseline gap-x-1.5 rounded-xl border px-4 py-3.5 ${
                        plan.isMostPop
                          ? "border-[#ffb15c]/60 bg-primary/10"
                          : "border-zinc-800 bg-black/35"
                      }`}
                    >
                      <span
                        className={`font-bold leading-none tracking-tight ${
                          plan.isMostPop ? "text-[2.1rem] xl:text-4xl" : "text-3xl"
                        }`}
                      >
                        {plan.price}
                      </span>
                      {plan.priceSuffix && (
                        <span className="text-sm text-zinc-400">{plan.priceSuffix}</span>
                      )}
                    </div>

                    <Separator className="my-4 bg-zinc-800" />

                    <ul className="grid gap-y-2.5">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm leading-5">
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="text-zinc-100">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Lộ trình tách hẳn khỏi danh sách tính năng và ghi rõ là chưa có. Trộn thứ
                        chưa xây vào danh sách tính năng là bán thứ không giao được. */}
                    {plan.roadmap && (
                      <div className="mt-5 rounded-xl border border-zinc-800 bg-black/35 p-3.5">
                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                          Đang phát triển
                        </p>
                        <ul className="grid gap-y-1.5">
                          {plan.roadmap.map((item) => (
                            <li key={item} className="text-xs leading-5 text-zinc-500">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div
                      className={`mt-auto flex flex-col gap-2.5 pt-6 ${
                        plan.isMostPop ? "xl:pt-8" : ""
                      }`}
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
                        <a {...ctaProps(plan.primary)} className="inline-flex items-center gap-2">
                          {plan.primary.label}
                          <PrimaryIcon className="size-4" />
                        </a>
                      </Button>

                      {plan.secondary && SecondaryIcon && (
                        <a
                          {...ctaProps(plan.secondary)}
                          className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-zinc-400 underline-offset-4 transition-colors hover:text-[#ffb15c] hover:underline"
                        >
                          <SecondaryIcon className="size-3.5" />
                          {plan.secondary.label}
                        </a>
                      )}
                    </div>
                  </div>
                </Spotlight>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
