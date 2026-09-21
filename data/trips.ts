import { createWhatsAppLink } from "@/config/contact";

export const tripRegions = [
  "All",
  "Kerala",
  "Tamil Nadu",
  "Karnataka",
  "Goa",
] as const;

export type TripRegion = (typeof tripRegions)[number];
export type DestinationState = Exclude<TripRegion, "All">;

export type TripDestination = {
  number: string;
  name: string;
  state: DestinationState;
  category: "Hill Station" | "Beach" | "Nature" | "City";
  image: string;
  alt: string;
  format: "portrait" | "landscape" | "tall";
  enquiryLink: string;
};

function destination(
  number: string,
  name: string,
  state: DestinationState,
  category: TripDestination["category"],
  image: string,
  alt: string,
  format: TripDestination["format"],
): TripDestination {
  return {
    number,
    name,
    state,
    category,
    image,
    alt,
    format,
    enquiryLink: createWhatsAppLink(
      `Hi Alaikka, I'd like to know more about the ${name} trip.`,
    ),
  };
}

export const tripDestinations: readonly TripDestination[] = [
  destination("01", "Ooty", "Tamil Nadu", "Hill Station", "/images/demo/trips/ooty-demo.png", "Misty mountain landscape in Ooty", "tall"),
  destination("02", "Munnar", "Kerala", "Hill Station", "/images/demo/trips/munnar-demo.png", "Tea-covered hills in Munnar", "landscape"),
  destination("03", "Wayanad", "Kerala", "Nature", "/images/demo/trips/wayanad-demo.png", "Forest landscape in Wayanad", "portrait"),
  destination("04", "Goa", "Goa", "Beach", "/images/trips/goa.png", "Palm-lined Goa coast at sunset", "landscape"),
  destination("05", "Mysore", "Karnataka", "City", "/images/trips/mysore.png", "Mysore Palace in evening light", "portrait"),
  destination("06", "Coorg", "Karnataka", "Nature", "/images/trips/coorg.png", "Green coffee country landscape in Coorg", "tall"),
  destination("07", "Kodaikanal", "Tamil Nadu", "Hill Station", "/images/trips/kodaikanal.png", "Misty lake road through Kodaikanal", "landscape"),
  destination("08", "Vagamon", "Kerala", "Hill Station", "/images/trips/vagamon.png", "Rolling green meadows in Vagamon", "portrait"),
  destination("09", "Thekkady", "Kerala", "Nature", "/images/trips/thekkady.png", "Forest reservoir landscape in Thekkady", "tall"),
  destination("10", "Bengaluru", "Karnataka", "City", "/images/trips/bengaluru.png", "Vidhana Soudha in Bengaluru at blue hour", "landscape"),
];
