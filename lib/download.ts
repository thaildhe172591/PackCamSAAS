/**
 * Bản cài Windows nằm ở GitHub Releases, không nằm trong repo.
 *
 * Trước đây file .exe được commit thẳng vào `public/downloads/`. Mỗi lần cập nhật cộng thêm
 * ~67MB VĨNH VIỄN vào lịch sử git (đã 5 lần, .git phình lên 352MB) — mà thư mục chỉ hiện
 * một bản, nên không ai thấy repo đang nặng dần. Tệ hơn: hai bản dựng khác nhau cùng tên
 * `PackCam_0.4.0_x64-setup.exe`, nên bản cũ nằm im hai tuần mà nhìn không ra.
 *
 * Đường dẫn dưới đây cố ý KHÔNG mang số phiên bản, và trỏ vào `latest` chứ không vào một tag
 * cụ thể. Nhờ vậy phát hành bản mới chỉ cần tạo release mới với asset trùng tên — web không
 * phải sửa, không phải deploy lại. Số phiên bản nằm ở tag của release, chỗ nó nhìn thấy được.
 */
export const INSTALLER_URL =
  "https://github.com/thaildhe172591/PackCamSAAS/releases/latest/download/PackCam-x64-setup.exe";
