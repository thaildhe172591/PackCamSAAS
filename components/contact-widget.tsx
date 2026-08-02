"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  MessageCircle,
  Phone,
  PhoneCall,
  Send,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

export const CONTACT_WIDGET_OPEN_EVENT = "packcam:open-contact-widget";

export const openContactWidget = () => {
  window.dispatchEvent(new Event(CONTACT_WIDGET_OPEN_EVENT));
};

type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  accentClass: string;
};

const contacts: ContactItem[] = [
  {
    label: "Fanpage",
    value: "facebook.com/packcampage",
    href: "https://www.facebook.com/packcampage",
    icon: MessageCircle,
    accentClass: "bg-[#24150c] text-[#ffb15c]",
  },
  {
    label: "Zalo",
    value: "0387048191",
    href: "https://zalo.me/0387048191",
    icon: PhoneCall,
    accentClass: "bg-primary text-white",
  },
  {
    label: "Số điện thoại",
    value: "0387048191",
    href: "tel:0387048191",
    icon: Phone,
    accentClass: "bg-[#ffe4d0] text-[#24150c]",
  },
  {
    label: "Telegram",
    value: "PackCam Corp / @packcam1243",
    href: "https://t.me/packcam1243",
    icon: Send,
    accentClass: "border border-[#ffc78f] bg-[#fff4e7] text-[#24150c]",
  },
];

export default function ContactWidget() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpenContact = () => setOpen(true);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener(CONTACT_WIDGET_OPEN_EVENT, onOpenContact);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener(CONTACT_WIDGET_OPEN_EVENT, onOpenContact);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            id="contact-widget-popup"
            role="dialog"
            aria-label="Thông tin liên hệ PackCam"
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-[#ffd0ad] bg-[#fffaf4] text-[#24150c] shadow-[0_24px_70px_rgba(12,8,4,0.24)]"
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#ffe0c2] bg-[linear-gradient(135deg,#fffaf4_0%,#fff0df_100%)] px-4 py-4">
              <div>
                <p className="text-sm font-bold">Liên hệ tư vấn PackCam</p>
                <p className="mt-1 text-xs leading-5 text-[#6f635b]">
                  Chọn kênh thuận tiện, đội hỗ trợ sẽ phản hồi nhanh nhất có thể.
                </p>
              </div>

              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-8 rounded-full text-[#6f635b] hover:bg-[#ffe4d0] hover:text-[#24150c]"
                onClick={() => setOpen(false)}
                aria-label="Đóng popup liên hệ"
              >
                <X className="size-4" />
              </Button>
            </div>

            <div className="space-y-2 p-3">
              {contacts.map((contact, index) => {
                const Icon = contact.icon;

                return (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      contact.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.18, delay: index * 0.045 }}
                    className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-3 transition-colors duration-200 hover:border-[#ffd0ad] hover:bg-[#fff0df] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
                  >
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-full shadow-sm ${contact.accentClass}`}
                    >
                      <Icon className="size-[18px]" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold leading-5">
                        {contact.label}
                      </span>
                      <span className="block truncate text-xs leading-5 text-[#6f635b]">
                        {contact.value}
                      </span>
                    </span>

                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#24150c]/5 transition-colors group-hover:bg-[#24150c]/10">
                      <ArrowUpRight className="size-3.5" />
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        type="button"
        size="icon"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="contact-widget-popup"
        aria-label={open ? "Đóng widget liên hệ" : "Mở widget liên hệ"}
        className="packcam-contact-pulse size-14 rounded-full border border-[#ffcfad] bg-primary text-white shadow-[0_18px_42px_rgba(255,106,0,0.35)] transition-all duration-200 hover:bg-[#e96500] hover:shadow-[0_22px_48px_rgba(255,106,0,0.42)] focus-visible:ring-4 focus-visible:ring-orange-200"
      >
        {open ? <X className="size-5" /> : <MessageCircle className="size-5" />}
      </Button>
    </div>
  );
}
