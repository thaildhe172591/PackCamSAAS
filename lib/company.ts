/**
 * Thông tin doanh nghiệp hiển thị ở footer, trang /about và JSON-LD trong <head>.
 *
 * Ba chỗ này phải khớp từng chữ với hồ sơ đã khai ở bên ngoài (Anthropic startup program,
 * LinkedIn): bộ duyệt tự động đối chiếu chúng với nhau, lệch một chỗ là mất tác dụng xác minh.
 *
 * Giấy ĐKDN đã cấp (2026-10-08). Hai tên dưới đây phải trùng từng chữ với giấy — tên tiếng Anh là
 * "tên công ty viết bằng tiếng nước ngoài" trên giấy. Không hiển thị mã số thuế/thông tin đăng ký.
 */
export const COMPANY = {
  name: "PackCam",
  legalName: "Công ty TNHH Công nghệ Packcam",
  legalNameEn: "Packcam Technology Company Limited",
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
  foundingDate: "2026-07",
  founder: {
    name: "Thai Luu Danh",
    linkedin: "https://www.linkedin.com/in/luu-danh-thai-31ab55318/",
  },
  sameAs: ["https://www.facebook.com/packcampage"],
} as const;
