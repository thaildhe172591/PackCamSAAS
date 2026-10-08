/**
 * Thông tin doanh nghiệp hiển thị ở footer, trang /about và JSON-LD trong <head>.
 *
 * Ba chỗ này phải khớp từng chữ với hồ sơ đã khai ở bên ngoài (Anthropic startup program,
 * LinkedIn): bộ duyệt tự động đối chiếu chúng với nhau, lệch một chỗ là mất tác dụng xác minh.
 *
 * Hồ sơ ĐKDN "Công ty TNHH Công nghệ Packcam" đang nộp: chưa có giấy thì KHÔNG hiển thị tên công ty
 * ở đâu cả — ghi tên pháp nhân khi chưa được cấp là khai một pháp nhân chưa tồn tại. Có giấy thì
 * thêm `legalName` (+ tên tiếng nước ngoài đúng như trên giấy) vào đây, footer, /about và JSON-LD.
 */
export const COMPANY = {
  name: "PackCam",
  url: "https://packcam.online",
  email: "contact@packcam.online",
  phone: "0387048191",
  // Địa chỉ trụ sở trong hồ sơ đăng ký doanh nghiệp — giữ đúng từng chữ với hồ sơ.
  street: "Số nhà 6, Cầu Diễn, Tây Tựu",
  streetEn: "No. 6, Cau Dien, Tay Tuu",
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
