"use client";

import { SectionHeading, Spotlight, Stagger, StaggerItem } from "@/components/primitives";
import {
  Camera,
  FileSearch,
  Headphones,
  Lock,
  ShieldCheck,
  Workflow,
} from "lucide-react";

/**
 * Lưới bento thay cho sáu ô bằng nhau. Sáu card đồng kích thước nói với mắt rằng sáu tính năng
 * quan trọng ngang nhau — không đúng: "quay tự động" và "tra cứu theo đơn" là lý do khách mua,
 * bốn cái còn lại là điều kiện đủ. `span` ở đây là thứ tự ưu tiên viết bằng kích thước.
 */
const features = [
  {
    title: "Quay tự động theo đơn",
    description:
      "Nhân viên quét mã vận đơn là camera bắt đầu ghi, mã được khắc thẳng lên khung hình nên video tự nó chứng minh thuộc về đơn nào.",
    icon: Camera,
    span: "lg:col-span-4",
    feature: true,
  },
  {
    title: "Dữ liệu an toàn",
    description: "Lưu tập trung, phân quyền theo vai trò, hạn chế thất thoát.",
    icon: Lock,
    span: "lg:col-span-2",
  },
  {
    title: "Vận hành 24/7",
    description: "Chạy liên tục cho kho, quầy đóng gói và ca cao điểm.",
    icon: Workflow,
    span: "lg:col-span-2",
  },
  {
    title: "Tra cứu trong vài giây",
    description:
      "Tìm theo mã vận đơn, nhân viên, bàn hoặc ngày. Không phải tua tay hàng giờ để tìm đúng hai phút cần xem.",
    icon: FileSearch,
    span: "lg:col-span-4",
    feature: true,
  },
  {
    title: "Bảo vệ khách hàng",
    description:
      "Bằng chứng minh bạch khi khách phản hồi thiếu sản phẩm, sai sản phẩm hoặc kiện hàng bất thường.",
    icon: ShieldCheck,
    span: "lg:col-span-3",
  },
  {
    title: "Hỗ trợ khiếu nại",
    description:
      "Rút ngắn thời gian xác minh và đối soát khi có yêu cầu từ khách hàng hoặc từ sàn.",
    icon: Headphones,
    span: "lg:col-span-3",
  },
];

export default function Partners() {
  return (
    <section id="features" className="px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Tính năng"
          title="Kiểm soát đóng gói bằng video, xử lý khiếu nại bằng dữ liệu"
          lead="PackCam biến camera đóng gói thành một hệ thống bằng chứng có tổ chức, dễ tra cứu và đủ tin cậy để phục vụ vận hành hằng ngày."
          align="center"
          className="mb-12"
        />

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {features.map((feature) => (
            <StaggerItem key={feature.title} className={feature.span}>
              <Spotlight className="h-full rounded-2xl border border-border bg-card/85 p-6 shadow-[0_18px_44px_-28px_rgba(120,60,10,0.4)] backdrop-blur-sm transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary/35 lg:p-7">
                <div className="relative flex h-full flex-col">
                  <div
                    className={`mb-5 flex items-center justify-center rounded-xl bg-primary/12 text-primary transition-transform duration-300 group-hover:scale-105 ${
                      feature.feature ? "size-14" : "size-11"
                    }`}
                  >
                    <feature.icon
                      className={feature.feature ? "size-6" : "size-5"}
                      strokeWidth={1.75}
                    />
                  </div>

                  <h3
                    className={`font-bold tracking-tight text-foreground ${
                      feature.feature ? "text-xl sm:text-2xl" : "text-base"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`mt-3 leading-7 text-muted-foreground ${
                      feature.feature ? "max-w-[52ch] text-base" : "text-sm"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </Spotlight>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
