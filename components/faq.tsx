"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const accordionItems = [
  {
    title: "PackCam phù hợp với mô hình doanh nghiệp nào?",
    content:
      "PackCam phù hợp với shop online, kho vận, fulfillment, doanh nghiệp bán hàng đa kênh và các đội cần ghi lại quá trình đóng gói để xử lý khiếu nại minh bạch.",
  },
  {
    title: "Có thể tra cứu video theo đơn hàng không?",
    content:
      "Có. PackCam được định hướng để giúp đội vận hành tìm lại video theo đơn hàng, thời gian và camera, nhờ đó rút ngắn thời gian xác minh khi khách phản hồi thiếu hàng hoặc sai hàng.",
  },
  {
    title: "Dữ liệu video được dùng để làm gì?",
    content:
      "Video là bằng chứng đối soát giữa kho, chăm sóc khách hàng, đơn vị vận chuyển và khách hàng. Doanh nghiệp có thể dùng dữ liệu này để giảm tranh chấp và cải thiện quy trình đóng gói.",
  },
  {
    title: "Tôi có thể tải bản cài Windows ở đâu?",
    content:
      "Bạn có thể tải trực tiếp bằng các nút Tải Windows trên trang. Route tải xuống đang trỏ tới bản cài PackCam_0.4.0_x64-setup.exe trong thư mục release hiện tại.",
  },
];

export default function Faq() {
  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="px-4 py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-lg border border-primary/15 bg-primary/7 px-4 py-2 text-sm font-semibold text-primary">
            Câu hỏi thường gặp
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-foreground sm:text-4xl">
            Những điều doanh nghiệp thường hỏi trước khi triển khai PackCam
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Các câu trả lời tập trung vào giá trị vận hành, khả năng tra cứu và cách
            PackCam hỗ trợ đội chăm sóc khách hàng trong xử lý khiếu nại.
          </p>
        </div>

        <div className="w-full max-w-3xl rounded-lg border border-border bg-white p-3 shadow-sm sm:p-5">
          <Accordion type="single" collapsible className="w-full">
            {accordionItems.map((item, index) => (
              <AccordionItem
                key={item.title}
                value={`item-${index}`}
                className="border-b border-border px-3"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-7 text-muted-foreground">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </motion.section>
  );
}
