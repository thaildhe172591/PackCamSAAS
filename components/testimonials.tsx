"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Box,
  Clock3,
  Headphones,
  Search,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

const proofPoints = [
  {
    label: "Bằng chứng rõ ràng",
    value: "Mọi thao tác đóng gói đều có video đối soát.",
    icon: BadgeCheck,
  },
  {
    label: "Giảm thất thoát",
    value: "Nhận diện sớm sai sót trước khi đơn rời kho.",
    icon: Box,
  },
  {
    label: "Phản hồi nhanh",
    value: "Đội CSKH có dữ liệu để trả lời khách tự tin hơn.",
    icon: Headphones,
  },
];

const workflows = [
  {
    title: "Ghi lại quá trình đóng gói",
    description:
      "Camera được đặt tại khu vực thao tác để lưu trọn quy trình chuẩn bị đơn hàng.",
    icon: Clock3,
  },
  {
    title: "Tìm đúng video cần xem",
    description:
      "Tra cứu theo thời gian, camera hoặc mã đơn để không phải tua thủ công hàng giờ.",
    icon: Search,
  },
  {
    title: "Chốt khiếu nại bằng dữ liệu",
    description:
      "Video giúp kho, CSKH và khách hàng cùng nhìn vào một nguồn thông tin thống nhất.",
    icon: ShieldCheck,
  },
];

export default function Testimonials() {
  return (
    <div id="story">
      <section id="banners" className="px-4 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
          >
            <div className="space-y-5">
              <span className="inline-flex rounded-lg border border-primary/15 bg-primary/7 px-4 py-2 text-sm font-semibold text-primary">
                Vận hành minh bạch
              </span>
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                Mỗi đơn hàng đều có lịch sử hình ảnh để đối soát
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                PackCam biến khu vực đóng gói thành một điểm kiểm soát trực quan:
                ghi hình liên tục, lưu trữ có tổ chức và giúp đội vận hành tìm lại
                bằng chứng khi phát sinh tranh chấp.
              </p>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {proofPoints.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-border bg-white/70 p-4 shadow-sm"
                  >
                    <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/12 text-primary">
                      <item.icon className="size-5" />
                    </div>
                    <h3 className="text-sm font-bold text-foreground">{item.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Image
              src="/packcam/packcam-banner-ngang.png"
              alt="PackCam ghi hình đóng gói, lưu trữ an toàn và tra cứu dễ dàng"
              width={1983}
              height={793}
              className="h-auto w-full object-contain drop-shadow-[0_18px_32px_rgba(255,106,0,0.16)]"
              sizes="(max-width: 1024px) 100vw, 700px"
            />
          </motion.div>
        </div>
      </section>

      <section id="posters" className="px-4 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mx-auto w-full max-w-[430px]"
          >
            <Image
              src="/packcam/packcam-poster-doc.png"
              alt="PackCam hỗ trợ doanh nghiệp quản lý quay đóng gói và khiếu nại"
              width={1024}
              height={1536}
              className="h-auto w-full object-contain drop-shadow-[0_20px_36px_rgba(255,106,0,0.16)]"
              sizes="(max-width: 1024px) 90vw, 430px"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="space-y-6"
          >
            <span className="inline-flex rounded-lg border border-primary/15 bg-primary/7 px-4 py-2 text-sm font-semibold text-primary">
              Xử lý khiếu nại chuyên nghiệp
            </span>
            <h2 className="max-w-3xl text-3xl font-extrabold text-foreground sm:text-4xl">
              Khi khách hàng hỏi, đội của bạn có video để trả lời
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
              Thay vì phụ thuộc vào trí nhớ nhân sự hoặc tin nhắn rời rạc, PackCam
              giúp doanh nghiệp có một nguồn bằng chứng thống nhất cho các tình huống
              thiếu hàng, sai hàng, móp méo kiện hoặc cần kiểm tra lại thao tác đóng gói.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {workflows.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-border bg-white/70 p-5 shadow-sm"
                >
                  <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/12 text-primary">
                    <item.icon className="size-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <Image
              src="/packcam/packcam-poster-ngang.png"
              alt="PackCam quản lý đóng gói bằng video và hỗ trợ tra cứu khiếu nại"
              width={1536}
              height={1024}
              className="h-auto w-full max-w-[760px] object-contain drop-shadow-[0_18px_32px_rgba(255,106,0,0.16)]"
              sizes="(max-width: 1024px) 100vw, 760px"
            />
          </motion.div>
        </div>
      </section>

      <section id="splash" className="px-4 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="space-y-6"
          >
            <span className="inline-flex rounded-lg border border-primary/15 bg-primary/7 px-4 py-2 text-sm font-semibold text-primary">
              Trải nghiệm nhất quán
            </span>
            <h2 className="max-w-3xl text-3xl font-extrabold text-foreground sm:text-4xl">
              Từ trang giới thiệu đến ứng dụng Windows đều cùng một nhận diện
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
              Bộ hình ảnh PackCam được dùng như một hệ thống thị giác xuyên suốt:
              khách hàng thấy rõ sản phẩm trên website, nhân sự nhận ra ứng dụng khi
              mở phần mềm và tài liệu bán hàng vẫn giữ cùng cảm giác chuyên nghiệp.
            </p>
            <Button asChild size="lg" className="rounded-lg px-6 shadow-sm">
              <a href="/downloads/PackCam_0.4.0_x64-setup.exe">
                Tải PackCam cho Windows
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            className="grid items-center gap-4 sm:grid-cols-[1fr_0.72fr]"
          >
            <Image
              src="/packcam/packcam-splash-screen.png"
              alt="Màn hình khởi động PackCam"
              width={1536}
              height={1024}
              className="h-auto w-full object-contain drop-shadow-[0_20px_36px_rgba(255,106,0,0.16)]"
              sizes="(max-width: 768px) 88vw, 470px"
            />
            <div className="grid gap-4">
              <Image
                src="/packcam/packcam-app-icon-square.png"
                alt="Biểu tượng ứng dụng PackCam"
                width={1024}
                height={1024}
                className="mx-auto h-auto w-full max-w-[230px] object-contain drop-shadow-[0_18px_28px_rgba(255,106,0,0.18)]"
                sizes="230px"
              />
              <Image
                src="/packcam/packcam-minibanner.png"
                alt="PackCam quản lý quay đóng gói và khiếu nại"
                width={1717}
                height={916}
                className="h-auto w-full object-contain drop-shadow-[0_18px_32px_rgba(255,106,0,0.16)]"
                sizes="(max-width: 768px) 88vw, 360px"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
