import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2348062177435"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SkyNet on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-brand text-white shadow-[0_10px_24px_-6px_rgba(16,185,129,0.55)] transition hover:scale-105 active:scale-95"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
