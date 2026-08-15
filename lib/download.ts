/**
 * Nguồn duy nhất cho nút tải bản cài Windows.
 *
 * Trước đây file `.exe` 70 MB được commit thẳng vào `public/downloads/` và số phiên bản nằm rải
 * rác ở sáu component. Mỗi bản mới là một lần copy tay, sáu lần sửa chuỗi, và 70 MB cộng vĩnh
 * viễn vào lịch sử git — quên một chỗ là nút đó lặng lẽ phát bản cũ.
 *
 * `releases/latest/download/...` luôn trả bản mới nhất, nên nút tải đúng kể cả khi trang chưa
 * kịp deploy lại. Tên file không kèm số phiên bản chính là để đường dẫn này đứng yên.
 */
export const DOWNLOAD_URL =
  "https://github.com/thaildhe172591/PackCamSAAS/releases/latest/download/PackCam-x64-setup.exe";

/**
 * Chỉ để hiển thị. Workflow phát hành của repo PackCam tự sửa dòng này sau mỗi bản rồi push, và
 * chính cú push đó là thứ kích hoạt Vercel deploy lại trang.
 *
 * Lệch với bản thật thì chỉ sai con số hiển thị; nút tải vẫn phát đúng bản mới nhất.
 */
export const LATEST_VERSION = "0.5.1";
