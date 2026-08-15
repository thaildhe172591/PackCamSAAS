import { redirect } from "next/navigation";

import { DOWNLOAD_URL } from "@/lib/download";

/**
 * Không nút nào trên trang trỏ vào đây nữa, nhưng đường dẫn này đã từng được phát ra ngoài nên
 * giữ lại và chuyển hướng, thay vì xoá đi để nó thành 404 với người đang giữ link cũ.
 *
 * Bản cũ đọc file `.exe` commit trong repo, và nếu không thấy thì đọc tiếp một đường dẫn tuyệt
 * đối trên ổ D của máy lập trình viên — trên Vercel đường đó không bao giờ tồn tại, nên nhánh
 * fallback chỉ có thể dẫn tới 404.
 */
export function GET() {
  redirect(DOWNLOAD_URL);
}
