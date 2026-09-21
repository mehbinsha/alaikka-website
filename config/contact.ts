const phone = "919947201000";

const tripMessage =
  "Hi Alaikka, I'd like to plan a trip with you. Could you share the available tour packages and vehicle options?";
const vehicleMessage =
  "Hi Alaikka, I need a tourist vehicle for a group trip. Could you help me choose the right vehicle?";
const contactMessage =
  "Hi Alaikka, I'd like to plan a trip with you";
const transportMessage =
  "Hi Alaikka, I'd like to enquire about your transport service. Could you share the available vehicle options?";

export function createWhatsAppLink(message: string) {
  const encodedMessage = encodeURIComponent(message).replace(/'/g, "%27");
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

export const contactConfig = {
  phone,
  displayPhone: "+91 99472 01000",
  callLink: `tel:+${phone}`,
  email: "hello@alaikkatravel.com",
  emailLink: "mailto:hello@alaikkatravel.com",
  instagramLink:
    "https://www.instagram.com/alaikka_travel_mate?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
  locationLink: "https://maps.app.goo.gl/r4PWtmRKpX3nhQsB7",
  whatsapp: {
    trip: {
      message: tripMessage,
      link: createWhatsAppLink(tripMessage),
    },
    vehicle: {
      message: vehicleMessage,
      link: createWhatsAppLink(vehicleMessage),
    },
    contact: {
      message: contactMessage,
      link: createWhatsAppLink(contactMessage),
    },
    transport: {
      message: transportMessage,
      link: createWhatsAppLink(transportMessage),
    },
  },
} as const;
