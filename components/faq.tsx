"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { openContactWidget } from "@/components/contact-widget";
import { Mail, MessageCircle } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/primitives";
import { COMPANY } from "@/lib/company";

const accordionItems = [
  {
    title: "PackCam phù hợp với mô hình doanh nghiệp nào?",
    content:
      "Shop online, kho vận, fulfillment, doanh nghiệp bán hàng đa kênh và các đội cần ghi lại quá trình đóng gói để xử lý khiếu nại minh bạch. Quy mô từ 2 bàn đóng gói (gói Standard) đến 8 bàn (gói Pro); chuỗi nhiều kho dùng gói Enterprise.",
  },
  {
    title: "Có thể tra cứu video theo đơn hàng không?",
    content:
      "Có. Mã vận đơn được khắc thẳng lên khung hình lúc quay, nên video tự nó gắn với đơn. Bạn tra cứu theo mã vận đơn, nhân viên, bàn hoặc ngày để tìm đúng đoạn cần xem thay vì tua thủ công.",
  },
  {
    title: "Video lưu ở đâu, có cần internet không?",
    content:
      "Video nằm trên máy chạy PackCam trong kho của bạn, không đẩy lên máy chủ của chúng tôi. Vì vậy phần mềm chạy được cả khi mất mạng, và bạn tự quyết định thời gian lưu theo dung lượng ổ đĩa cùng chính sách dữ liệu của doanh nghiệp.",
  },
  {
    title: "Mua và nhận key như thế nào?",
    content:
      "Liên hệ PackCam qua email, điện thoại hoặc Fanpage: đội ngũ báo giá, hướng dẫn thanh toán và gửi key cho bạn. Key dùng thử 7 ngày và gói Enterprise cũng được phát sau khi trao đổi.",
  },
  {
    title: "Dùng thử có bị giới hạn tính năng không?",
    content:
      "Không. Bản dùng thử 7 ngày mở đủ tính năng như gói Pro trên 2 bàn đóng gói, chạy trên dữ liệu thật của shop. Khi chuyển sang gói trả phí, dữ liệu đã quay được giữ nguyên. Lưu ý phần mềm không tự mở dùng thử — cần key do nhà cung cấp phát.",
  },
  {
    title: "Tôi có thể tải bản cài Windows ở đâu?",
    content:
      "Bấm bất kỳ nút Tải Windows nào trên trang. Link luôn trỏ tới bản phát hành mới nhất trên GitHub Releases, nên bạn không cần theo dõi số phiên bản — tải lại lúc nào cũng ra bản mới nhất.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">
        {/*
          Cột trái trước đây chỉ có tiêu đề rồi bỏ trống phần còn lại trong khi cột phải dài gấp
          ba. Ghim nó lại và thêm lối liên hệ ngay tại chỗ: người đọc FAQ là người sắp hỏi thêm,
          bắt họ cuộn ngược lên tìm nút liên hệ là bỏ rơi đúng lúc họ định hỏi.
        */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="Câu hỏi thường gặp"
            title="Những điều doanh nghiệp thường hỏi trước khi triển khai"
            lead="Câu trả lời tập trung vào giá trị vận hành, khả năng tra cứu và cách PackCam hỗ trợ đội chăm sóc khách hàng."
          />

          <Reveal
            delay={0.1}
            className="rounded-2xl border border-border bg-card/80 p-6 shadow-[0_20px_50px_-38px_rgba(120,60,10,0.5)] backdrop-blur-sm"
          >
            <h3 className="text-base font-bold text-foreground">Chưa thấy câu bạn cần?</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Nhắn thẳng cho đội PackCam — người hỗ trợ trả lời trong giờ làm việc.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <Button asChild size="sm" className="packcam-cta-shimmer rounded-lg">
                <a href={`mailto:${COMPANY.email}`}>
                  Gửi email
                  <Mail className="size-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-lg"
                onClick={openContactWidget}
              >
                Kênh liên hệ khác
                <MessageCircle className="size-4" />
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={0.08}
          className="w-full rounded-2xl border border-border bg-card/80 p-2 shadow-[0_24px_60px_-45px_rgba(120,60,10,0.55)] backdrop-blur-sm sm:p-4"
        >
          <Accordion type="single" collapsible className="w-full">
            {accordionItems.map((item, index) => (
              <AccordionItem
                key={item.title}
                value={`item-${index}`}
                className="border-b border-border px-3 last:border-b-0"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-7 text-muted-foreground">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
