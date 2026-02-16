import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "919876543210"; 
  const message = "Hi, I want solar installation details";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#20bd5a] transition-transform hover:scale-105 animate-in slide-in-from-bottom-4 duration-500"
    >
      <MessageCircle className="h-6 w-6 fill-white text-[#25D366]" />
      <span className="font-bold hidden sm:inline">Chat With Solar Expert</span>
    </a>
  );
}