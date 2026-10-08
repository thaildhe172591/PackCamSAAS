import type { Metadata } from "next";
import Footer from "@/components/footer";
import { Eyebrow } from "@/components/primitives";
import { COMPANY } from "@/lib/company";

// "2026-07" → "July 2026" / "07/2026". timeZone UTC: không có nó, máy build ở múi giờ âm sẽ đọc
// ngày 1 thành cuối tháng trước.
const [foundedYear, foundedMonth] = COMPANY.foundingDate.split("-");
const foundedEn = `${new Date(`${COMPANY.foundingDate}-01T00:00:00Z`).toLocaleString("en-US", {
  month: "long",
  timeZone: "UTC",
})} ${foundedYear}`;
const foundedVi = `${foundedMonth}/${foundedYear}`;

export const metadata: Metadata = {
  title: "About PackCam | Giới thiệu PackCam",
  description:
    `PackCam is a software startup founded in ${foundedEn} in Hanoi, Vietnam, building packing-video evidence tools for e-commerce sellers and fulfillment warehouses.`,
  alternates: { canonical: "/about" },
};

/*
  Trang này cố ý không dùng `Reveal`/framer-motion như các section khác: motion render sẵn
  `opacity: 0` trong HTML và chỉ hiện khi JS chạy. Người đọc trang này phần lớn là bot xác minh
  doanh nghiệp, thứ có thể không chạy JS — nội dung phải thấy được ngay từ HTML server trả về.
*/

const facts: { en: string; vi: string; value: string; href?: string }[] = [
  { en: "Company", vi: "Công ty", value: `${COMPANY.legalName} · ${COMPANY.legalNameEn}` },
  { en: "Founded", vi: "Thành lập", value: `${foundedEn} · Tháng ${foundedVi}` },
  {
    en: "Address",
    vi: "Địa chỉ",
    value: `${COMPANY.street}, ${COMPANY.city}, ${COMPANY.country}`,
  },
  { en: "Founder", vi: "Nhà sáng lập", value: COMPANY.founder.name, href: COMPANY.founder.linkedin },
  { en: "Email", vi: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { en: "Website", vi: "Website", value: "packcam.online", href: COMPANY.url },
];

export default function About() {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-x-hidden">
      <section className="px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-12">
          <article lang="en" className="flex flex-col gap-5">
            <Eyebrow>About us</Eyebrow>
            <h1 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-4xl">
              About PackCam
            </h1>
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              PackCam is a Vietnam-based software startup building evidence and workflow
              tools for e-commerce sellers and fulfillment warehouses.
            </p>
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              Our product, PackCam for Windows, records every packing session, burns the
              shipment tracking number into the video frame, and lets teams find the right
              clip by tracking number, packer, station or date when a customer reports a
              missing, incorrect or damaged item. Videos stay on the warehouse&apos;s own
              computer and recording keeps working offline.
            </p>
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              PackCam was founded in {foundedEn} in {COMPANY.cityEn}, {COMPANY.countryEn},
              by {COMPANY.founder.name}. We are based at {COMPANY.streetEn}, {COMPANY.cityEn},{" "}
              {COMPANY.countryEn}. PackCam is developed by {COMPANY.legalNameEn} (
              {COMPANY.legalName}).
            </p>
          </article>

          <article lang="vi" className="flex flex-col gap-5 border-t border-border pt-12">
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
              Về PackCam
            </h2>
            <p className="text-base leading-8 text-muted-foreground">
              PackCam là startup phần mềm tại Việt Nam, xây dựng công cụ lưu bằng chứng và
              quy trình cho nhà bán hàng thương mại điện tử và kho fulfillment.
            </p>
            <p className="text-base leading-8 text-muted-foreground">
              Sản phẩm chính là phần mềm PackCam cho Windows: ghi hình từng lượt đóng gói,
              khắc mã vận đơn lên khung hình và tra cứu video theo mã vận đơn, nhân viên, bàn
              hoặc ngày khi khách khiếu nại thiếu hàng, sai hàng hay hàng hỏng. Video nằm trên
              máy tính của kho và vẫn quay được khi mất mạng.
            </p>
            <p className="text-base leading-8 text-muted-foreground">
              PackCam được thành lập vào tháng {foundedVi} tại {COMPANY.city} bởi Lưu Danh Thái,
              phát triển bởi {COMPANY.legalName}.
            </p>
          </article>

          <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {facts.map((fact) => (
              <div key={fact.en} className="flex flex-col gap-1 bg-white p-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  {fact.en === fact.vi ? fact.en : `${fact.en} · ${fact.vi}`}
                </dt>
                <dd className="text-sm font-medium text-foreground">
                  {fact.href ? (
                    <a
                      href={fact.href}
                      className="underline-offset-4 hover:underline"
                      {...(fact.href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}
                    >
                      {fact.value}
                    </a>
                  ) : (
                    fact.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <Footer />
    </main>
  );
}
