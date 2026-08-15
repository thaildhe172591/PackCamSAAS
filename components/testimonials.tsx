"use client";

import { Button } from "@/components/ui/button";
import { DOWNLOAD_URL } from "@/lib/download";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Box,
  Clock3,
  Headphones,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Eyebrow, Reveal, SectionHeading, Stagger, StaggerItem } from "@/components/primitives";
import Image from "next/image";
import { useRef } from "react";

/**
 * Ba điểm này trước đây là ba card xếp ngang TRONG cột trái vốn đã hẹp: mỗi card còn ~180px,
 * câu "Mọi thao tác đóng gói đều có video đối soát." vỡ thành bốn dòng. Xếp dọc thì cùng một
 * lượng chữ nằm gọn một dòng rưỡi — không mất thông tin nào, chỉ hết vỡ chữ.
 */
const proofPoints = [
  {
    label: "Bằng chứng rõ ràng",
    value: "Mọi thao tác đóng gói đều có video đối soát, gắn sẵn mã vận đơn.",
    icon: BadgeCheck,
  },
  {
    label: "Giảm thất thoát",
    value: "Nhận diện sớm sai sót trước khi đơn rời kho, không đợi khách báo.",
    icon: Box,
  },
  {
    label: "Phản hồi nhanh",
    value: "Đội CSKH có dữ liệu để trả lời khách trong lúc còn đang chat.",
    icon: Headphones,
  },
];

const workflows = [
  {
    title: "Ghi lại quá trình đóng gói",
    description:
      "Camera đặt tại khu vực thao tác, bắt đầu ghi ngay khi quét mã và lưu trọn quy trình chuẩn bị đơn hàng.",
    icon: Clock3,
  },
  {
    title: "Tìm đúng video cần xem",
    description:
      "Tra cứu theo mã vận đơn, thời gian, bàn hoặc nhân viên để không phải tua thủ công hàng giờ.",
    icon: Search,
  },
  {
    title: "Chốt khiếu nại bằng dữ liệu",
    description:
      "Kho, CSKH và khách hàng cùng nhìn vào một nguồn thông tin thống nhất thay vì tranh luận bằng trí nhớ.",
    icon: ShieldCheck,
  },
];

/** Khung cửa sổ giả quanh ảnh marketing: ảnh phẳng thả nổi giữa nền trắng trông như chỗ trống
 *  chưa kịp lấp. Có khung thì nó đọc ra là "sản phẩm", và có cạnh để canh với cột chữ bên kia. */
function Framed({
  src,
  alt,
  width,
  height,
  sizes,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-border bg-card/70 shadow-[0_28px_70px_-40px_rgba(120,60,10,0.55)] backdrop-blur-sm ${className ?? ""}`}
    >
      <div className="flex items-center gap-1.5 border-b border-border/70 bg-background/60 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-primary/70" />
        <span className="size-2.5 rounded-full bg-primary/35" />
        <span className="size-2.5 rounded-full bg-primary/20" />
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className="h-auto w-full object-contain"
      />
    </div>
  );
}

export default function Testimonials() {
  const reduced = useReducedMotion();
  const bannerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [36, -36]);

  return (
    <div id="story">
      <section id="banners" className="px-4 py-16 lg:px-8 lg:py-24">
        <div
          ref={bannerRef}
          className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14"
        >
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Vận hành minh bạch"
              title="Mỗi đơn hàng đều có lịch sử hình ảnh để đối soát"
              lead="PackCam biến khu vực đóng gói thành một điểm kiểm soát trực quan: ghi hình liên tục, lưu trữ có tổ chức và giúp đội vận hành tìm lại bằng chứng khi phát sinh tranh chấp."
            />

            <Stagger className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur-sm">
              {proofPoints.map((item) => (
                <StaggerItem
                  key={item.label}
                  className="flex items-start gap-4 p-5 transition-colors duration-300 hover:bg-primary/5"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary">
                    <item.icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">{item.label}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.value}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <motion.div style={{ y: parallaxY }} className="flex flex-col gap-4">
            <Reveal y={28}>
              <Framed
                src="/packcam/packcam-banner-ngang.png"
                alt="PackCam ghi hình đóng gói, lưu trữ an toàn và tra cứu dễ dàng"
                width={1983}
                height={793}
                sizes="(max-width: 1024px) 100vw, 680px"
              />
            </Reveal>

            {/* Banner tỉ lệ 2.5:1 chỉ cao bằng nửa cột chữ bên trái, để trống phần dưới. Lấp bằng
                lối thoát chuyển đổi giữa trang: đây là chỗ khách vừa hiểu sản phẩm làm gì, mà
                trước đó nút bấm gần nhất nằm tận màn hình đầu tiên. */}
            <Reveal
              delay={0.12}
              className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-card/70 p-5 backdrop-blur-sm sm:flex-row sm:items-center"
            >
              <p className="text-sm leading-6 text-muted-foreground">
                Muốn xem thử trên đơn hàng thật của shop?{" "}
                <span className="font-semibold text-foreground">
                  Bản dùng thử mở đủ tính năng trong 7 ngày.
                </span>
              </p>
              <Button
                asChild
                size="sm"
                className="packcam-cta-shimmer shrink-0 rounded-lg px-4 shadow-sm"
              >
                <a href={DOWNLOAD_URL}>
                  Tải về dùng thử
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </Reveal>
          </motion.div>
        </div>
      </section>

      {/*
        Poster dọc trước đây nằm trong cột `lg:items-center` cạnh một cột cao gần gấp đôi, nên nó
        bị đẩy xuống giữa và để lại một mảng trống lớn ở góc trên bên trái. Đổi sang `items-start`
        + `sticky`: poster đứng yên trong tầm mắt suốt lúc khách đọc ba bước bên phải — hết chỗ
        trống, và bản thân việc nó bám theo đã là chuyển động, không cần thêm hiệu ứng nào.

        Ảnh `packcam-poster-ngang.png` cũng bị bỏ khỏi đây: nó là CÙNG một artwork với poster dọc,
        chỉ khác tỉ lệ. Đặt cạnh nhau thì phần dưới section chỉ nói lại điều phần trên đã nói.
      */}
      <section id="posters" className="px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-14">
          <Reveal className="lg:sticky lg:top-28">
            <div className="mx-auto w-full max-w-[420px]">
              <Image
                src="/packcam/packcam-poster-doc.png"
                alt="PackCam hỗ trợ doanh nghiệp quản lý quay đóng gói và khiếu nại"
                width={1024}
                height={1536}
                className="h-auto w-full rounded-2xl object-contain shadow-[0_30px_70px_-38px_rgba(120,60,10,0.6)]"
                sizes="(max-width: 1024px) 88vw, 420px"
              />
            </div>
          </Reveal>

          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Xử lý khiếu nại"
              title="Khi khách hàng hỏi, đội của bạn có video để trả lời"
              lead="Thay vì phụ thuộc vào trí nhớ nhân sự hoặc tin nhắn rời rạc, PackCam giúp doanh nghiệp có một nguồn bằng chứng thống nhất cho các tình huống thiếu hàng, sai hàng, móp méo kiện hoặc cần kiểm tra lại thao tác đóng gói."
            />

            {/* Ba bước là một TRÌNH TỰ, không phải ba lựa chọn ngang hàng. Đánh số và nối bằng
                một đường dọc thì thứ tự tự nói ra; ba card cạnh nhau thì không. */}
            <Stagger stagger={0.1} className="relative flex flex-col">
              {/* left = padding của item (16px) + nửa ô icon (28px) = 44px, để đường kẻ xuyên đúng
                  tâm ba ô icon. Ô icon có nền đục và z-10 nên nó tự cắt đường thành ba đoạn. */}
              <span
                aria-hidden
                className="absolute bottom-10 left-[44px] top-10 w-px bg-gradient-to-b from-primary/40 via-primary/25 to-transparent"
              />
              {workflows.map((item, index) => (
                <StaggerItem
                  key={item.title}
                  className="group relative flex gap-5 rounded-2xl p-4 transition-colors duration-300 hover:bg-card/80"
                >
                  <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-primary shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <item.icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <div className="pt-1">
                    <span className="text-xs font-bold tracking-[0.18em] text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 text-lg font-bold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[58ch] text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section id="splash" className="px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14">
          <Reveal className="flex flex-col gap-6">
            <Eyebrow>Nhận diện nhất quán</Eyebrow>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-4xl">
              Từ trang giới thiệu đến ứng dụng Windows đều cùng một nhận diện
            </h2>
            <p className="max-w-[58ch] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Bộ hình ảnh PackCam được dùng như một hệ thống thị giác xuyên suốt:
              khách hàng thấy rõ sản phẩm trên website, nhân sự nhận ra ứng dụng khi
              mở phần mềm và tài liệu bán hàng vẫn giữ cùng cảm giác chuyên nghiệp.
            </p>
            <Button
              asChild
              size="lg"
              className="packcam-cta-shimmer w-fit rounded-lg px-6 shadow-sm"
            >
              <a href={DOWNLOAD_URL}>
                Tải PackCam cho Windows
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </Reveal>

          <Stagger className="grid grid-cols-2 items-start gap-4 sm:grid-cols-[1.35fr_1fr]">
            <StaggerItem className="col-span-2 sm:col-span-1">
              <Framed
                src="/packcam/packcam-splash-screen.png"
                alt="Màn hình khởi động PackCam"
                width={1536}
                height={1024}
                sizes="(max-width: 640px) 92vw, 420px"
              />
            </StaggerItem>

            <StaggerItem className="flex flex-col gap-4">
              <div className="flex items-center justify-center rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-sm">
                <Image
                  src="/packcam/packcam-app-icon-square.png"
                  alt="Biểu tượng ứng dụng PackCam"
                  width={1024}
                  height={1024}
                  className="h-auto w-full max-w-[170px] object-contain drop-shadow-[0_18px_28px_rgba(255,106,0,0.22)]"
                  sizes="170px"
                />
              </div>
              <Framed
                src="/packcam/packcam-minibanner.png"
                alt="PackCam quản lý quay đóng gói và khiếu nại"
                width={1717}
                height={916}
                sizes="(max-width: 640px) 92vw, 320px"
              />
            </StaggerItem>
          </Stagger>
        </div>
      </section>
    </div>
  );
}
