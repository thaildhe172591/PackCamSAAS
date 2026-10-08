import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/navbar";
import { COMPANY } from "@/lib/company";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  // Ảnh OG được nối tương đối vào base này. Để `localhost:3000` thì mọi link chia sẻ ra Facebook,
  // Zalo hay Telegram đều trỏ ảnh về máy người xem — nghĩa là không hiện ảnh nào cả.
  metadataBase: new URL("https://packcam.online"),
  title: "PackCam | Quay đóng gói tự động, chốt khiếu nại bằng video",
  description:
    "Phần mềm ghi hình quá trình đóng gói, khắc mã vận đơn lên khung hình và tra cứu video theo đơn để xử lý khiếu nại. Chạy trên Windows, dùng thử 7 ngày.",
};

// Dữ liệu có cấu trúc cho máy đọc: bot xác minh và Google lấy tên, founder, năm thành lập, địa
// điểm từ đây thay vì phải đoán từ nội dung tiếng Việt. Không có `legalName` vì chưa có pháp nhân.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.name,
  legalName: COMPANY.legalName,
  alternateName: COMPANY.legalNameEn,
  url: COMPANY.url,
  logo: `${COMPANY.url}/packcam/packcam-app-icon-1.png`,
  email: COMPANY.email,
  telephone: `+84${COMPANY.phone.slice(1)}`,
  foundingDate: COMPANY.foundingDate,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.street,
    addressLocality: COMPANY.cityEn,
    addressCountry: "VN",
  },
  founder: {
    "@type": "Person",
    name: COMPANY.founder.name,
    sameAs: COMPANY.founder.linkedin,
  },
  sameAs: COMPANY.sameAs,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${beVietnamPro.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
