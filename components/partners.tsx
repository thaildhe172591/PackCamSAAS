"use client";

import { motion } from "framer-motion";
import {
  Camera,
  FileSearch,
  Headphones,
  Lock,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const features = [
  {
    title: "Quay tự động",
    description:
      "Ghi lại toàn bộ quá trình đóng gói để giảm rủi ro thiếu hàng, nhầm hàng và tranh chấp sau giao.",
    icon: Camera,
  },
  {
    title: "Bảo vệ khách hàng",
    description:
      "Cung cấp bằng chứng minh bạch khi khách phản hồi thiếu sản phẩm, sai sản phẩm hoặc kiện hàng bất thường.",
    icon: ShieldCheck,
  },
  {
    title: "Tra cứu theo đơn",
    description:
      "Tìm nhanh video theo đơn hàng, thời gian hoặc camera để đội CSKH phản hồi khách hàng tự tin hơn.",
    icon: FileSearch,
  },
  {
    title: "Vận hành 24/7",
    description:
      "Theo dõi liên tục cho kho, quầy đóng gói và khu vực xử lý đơn trong các ca vận hành cao điểm.",
    icon: Workflow,
  },
  {
    title: "Dữ liệu an toàn",
    description:
      "Lưu trữ tập trung, dễ kiểm soát quyền truy cập và hạn chế thất thoát dữ liệu quan trọng.",
    icon: Lock,
  },
  {
    title: "Hỗ trợ khiếu nại",
    description:
      "Rút ngắn thời gian xác minh, đối soát và xử lý khi phát sinh yêu cầu từ khách hàng hoặc sàn bán.",
    icon: Headphones,
  },
];

export default function Partners() {
  return (
    <section id="features" className="px-4 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-lg border border-primary/15 bg-primary/7 px-4 py-2 text-sm font-semibold text-primary">
            Tính năng nổi bật
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-foreground sm:text-4xl">
            Kiểm soát đóng gói bằng video, xử lý khiếu nại bằng dữ liệu
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            PackCam giúp doanh nghiệp biến camera đóng gói thành một hệ thống bằng
            chứng có tổ chức, dễ tra cứu và đủ tin cậy để phục vụ vận hành hằng ngày.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group rounded-lg border border-border bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 flex size-12 items-center justify-center rounded-lg bg-primary/12 text-primary">
                <feature.icon className="size-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
