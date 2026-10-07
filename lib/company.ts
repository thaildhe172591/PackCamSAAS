/**
 * Thông tin doanh nghiệp hiển thị ở footer, trang /about và JSON-LD trong <head>.
 *
 * Ba chỗ này phải khớp từng chữ với hồ sơ đã khai ở bên ngoài (Anthropic startup program,
 * LinkedIn): bộ duyệt tự động đối chiếu chúng với nhau, lệch một chỗ là mất tác dụng xác minh.
 *
 * Chưa có pháp nhân nên KHÔNG ghi `legalName` hay hậu tố "Corp/Co., Ltd." ở bất kỳ đâu. Khi đã
 * đăng ký kinh doanh thì thêm tên pháp nhân vào đây, mọi chỗ hiển thị tự cập nhật theo.
 */
export const COMPANY = {
  name: "PackCam",
  url: "https://packcam.online",
  email: "contact@packcam.online",
  city: "Hà Nội",
  cityEn: "Hanoi",
  country: "Việt Nam",
  countryEn: "Vietnam",
  foundingDate: "2026-01",
  founder: {
    name: "Thai Luu Danh",
    linkedin: "https://www.linkedin.com/in/luu-danh-thai-31ab55318/",
  },
  sameAs: ["https://www.facebook.com/packcampage"],
} as const;
