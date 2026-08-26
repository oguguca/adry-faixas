// TODO: substituir pelo número real da Adry Faixas (formato: 55DDDNUMERO, apenas dígitos)
export const WHATSAPP_NUMBER = "SEU_NUMERO_AQUI";

export const WHATSAPP_MESSAGE = "Olá! Gostaria de solicitar um orçamento.";

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
