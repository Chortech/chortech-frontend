import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Category = {
  id: string;
  name: string;
  icon: IconProp;
};

export const categories: Category[] = [
  { id: "0", name: "مواد غذایی", icon: "utensils" },
  { id: "1", name: "پوشاک", icon: "tshirt" },
  { id: "2", name: "هدیه", icon: "gift" },
  { id: "3", name: "سلامت", icon: "heartbeat" },
  { id: "4", name: "لوازم تحریر", icon: "pencil-ruler" },
  { id: "5", name: "ورزش", icon: "dumbbell" },
  { id: "6", name: "سفر", icon: "suitcase-rolling" },
  { id: "7", name: "کالای دیجیتال", icon: "laptop" },
  { id: "8", name: "متفرقه", icon: "sticky-note" },
];
