import cappuccinoImg from "@/assets/cup-cappuccino.png";
import latteImg from "@/assets/cup-latte.png";
import mochaImg from "@/assets/cup-mocha.png";

export type DrinkId =
  | "cappuccino"
  | "latte"
  | "mocha"
  | "espresso"
  | "americano"
  | "flat-white"
  | "caramel-raf"
  | "iced-latte"
  | "cold-brew";

export type Drink = {
  id: DrinkId;
  name: string;
  description: string;
  price: number;
  rating: number;
  category: "Classic" | "Signature" | "Cold";
  image: string;
};

export const drinks: Drink[] = [
  { id: "cappuccino", name: "Cappuccino", description: "20% espresso, 40% steamed milk and 40% silky milk foam.", price: 180, rating: 4.9, category: "Classic", image: cappuccinoImg },
  { id: "latte", name: "Latte", description: "30% espresso and 70% fresh steamed milk.", price: 200, rating: 5.0, category: "Classic", image: latteImg },
  { id: "mocha", name: "Mocha", description: "20% espresso, 50% hot milk and 30% rich hot chocolate.", price: 220, rating: 4.7, category: "Signature", image: mochaImg },
  { id: "espresso", name: "Espresso", description: "A short, intense shot from our house blend.", price: 120, rating: 4.8, category: "Classic", image: mochaImg },
  { id: "americano", name: "Americano", description: "Double espresso topped with hot water.", price: 140, rating: 4.6, category: "Classic", image: cappuccinoImg },
  { id: "flat-white", name: "Flat White", description: "Double ristretto with thin, velvety microfoam.", price: 210, rating: 4.8, category: "Signature", image: cappuccinoImg },
  { id: "caramel-raf", name: "Caramel Raf", description: "Espresso whipped with cream and house caramel.", price: 240, rating: 4.9, category: "Signature", image: mochaImg },
  { id: "iced-latte", name: "Iced Latte", description: "Espresso over ice with cold milk.", price: 210, rating: 4.7, category: "Cold", image: latteImg },
  { id: "cold-brew", name: "Cold Brew", description: "Steeped for 18 hours, smooth and naturally sweet.", price: 190, rating: 4.8, category: "Cold", image: latteImg },
];

export const featuredDrinks = drinks.filter((d) =>
  (["cappuccino", "latte", "mocha"] as DrinkId[]).includes(d.id),
);

export const getDrink = (id: DrinkId) => drinks.find((d) => d.id === id)!;

export const formatPrice = (amount: number) => `₹${amount}`;
