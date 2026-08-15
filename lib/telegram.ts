/**
 * Deep link sang bot bán license.
 *
 * `?start=<payload>` là cơ chế có sẵn của Telegram: bot nhận payload ở tin nhắn đầu tiên.
 * Nhờ vậy trang bán hàng chuyển được lựa chọn của khách sang bot mà không cần backend,
 * không cần API, không cần phiên đăng nhập.
 *
 * PLAN_CODE phải khớp `PLANS` trong repo bot (`src/catalog.js`). Bot đối chiếu payload với
 * danh sách gói ĐANG BÁN rồi mới mở wizard; sai mã thì nó lặng lẽ rơi về menu thường, nên
 * lệch tên ở đây không làm hỏng gì — chỉ làm mất tác dụng preselect mà không ai thấy.
 */
export const TELEGRAM_BOT = "packcambot";

export const PLAN_CODE = {
  trial: "trial",
  standard: "standard",
  pro: "pro",
  enterprise: "enterprise",
} as const;

export type PlanCode = (typeof PLAN_CODE)[keyof typeof PLAN_CODE];

export function telegramBuyLink(plan?: PlanCode) {
  const base = `https://t.me/${TELEGRAM_BOT}`;
  return plan ? `${base}?start=${plan}` : base;
}
