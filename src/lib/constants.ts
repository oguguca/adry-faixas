export const INSTAGRAM_LINK = "https://www.instagram.com/adry_faixas/";

export const EMAIL = "adryfaixas@gmail.com";

export const EMAIL_LINK = `mailto:${EMAIL}`;

export const WHATSAPP_LINK = "https://wa.me/5511940390256";

export function getWhatsAppLink(message: string) {
  return `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
}

export const CONTACT_LINK = getWhatsAppLink(
  "Oi! Vim pelo site da Adry e gostaria de pedir um or\u00e7amento.",
);
