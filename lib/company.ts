/**
 * Thông tin doanh nghiệp hiển thị ở footer, trang /about và JSON-LD trong <head>.
 *
 * Ba chỗ này phải khớp từng chữ với hồ sơ đã khai ở bên ngoài (Anthropic startup program,
 * LinkedIn): bộ duyệt tự động đối chiếu chúng với nhau, lệch một chỗ là mất tác dụng xác minh.
 *
 * Hồ sơ ĐKDN đang nộp nên tên công ty luôn đi kèm `pendingVi/pendingEn`: ghi tên pháp nhân trần khi
 * chưa có giấy là khai một pháp nhân chưa tồn tại, và ai tra cổng đăng ký quốc gia cũng không thấy.
 * Có giấy thì: để "" hai dòng pending, thêm mã số doanh nghiệp, thêm `legalName`/`taxID` vào
 * JSON-LD trong app/layout.tsx.
 */
export const COMPANY = {
  name: "PackCam",
  // Tên tiếng Anh phải trùng "tên công ty viết bằng tiếng nước ngoài" trong hồ sơ ĐKDN.
  legalName: "Công ty TNHH Công nghệ Packcam",
  legalNameEn: "Packcam Technology Company Limited",
  pendingVi: "đang hoàn tất đăng ký doanh nghiệp",
  pendingEn: "incorporation in progress",
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
