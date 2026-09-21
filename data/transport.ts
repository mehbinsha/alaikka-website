import { createWhatsAppLink } from "@/config/contact";

export type TransportService = {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  objectPosition?: string;
  enquiryLink: string;
};

function createServiceEnquiryLink(service: string) {
  return createWhatsAppLink(
    `Hi Alaikka, I'd like to enquire about your ${service} service. Could you share the available vehicle options?`,
  );
}

export const transportServices: readonly TransportService[] = [
  {
    id: "goods-transport",
    number: "01",
    title: "Goods Transport",
    description: "Reliable transport for your commercial requirements.",
    image: "/media/transport/alaikka-blue-goods-truck.jpg",
    alt: "Blue Alaikka goods truck parked outdoors",
    objectPosition: "44% 50%",
    enquiryLink: createServiceEnquiryLink("Goods Transport"),
  },
  {
    id: "commercial-transport",
    number: "02",
    title: "Commercial Transport",
    description: "Flexible transport solutions for different requirements.",
    image: "/media/transport/redalai.png",
    alt: "Red and black Alaikka commercial transport vehicle",
    objectPosition: "50% 48%",
    enquiryLink: createServiceEnquiryLink("Commercial Transport"),
  },
  {
    id: "heavy-goods-transport",
    number: "03",
    title: "Heavy Goods Transport",
    description: "For larger transport requirements.",
    image: "/media/transport/alaikka-heavy-truck.jpg",
    alt: "Alaikka Ashok Leyland heavy goods truck",
    objectPosition: "58% 50%",
    enquiryLink: createServiceEnquiryLink("Heavy Goods Transport"),
  },
  {
    id: "machinery-services",
    number: "04",
    title: "Excavator / Machinery",
    description: "Machinery support for your project requirements.",
    image: "/media/transport/alaikka-excavator.jpg",
    alt: "Yellow Alaikka chain excavator",
    objectPosition: "52% 50%",
    enquiryLink: createServiceEnquiryLink("Excavator / Machinery"),
  },
  {
    id: "small-load-transport",
    number: "05",
    title: "Small Load Transport",
    description: "Flexible transport for smaller and local requirements.",
    image: "/media/transport/alaikka-small-lorry.jpg",
    alt: "Small red Alaikka goods lorry",
    objectPosition: "50% 50%",
    enquiryLink: createServiceEnquiryLink("Small Load Transport"),
  },
] as const;
