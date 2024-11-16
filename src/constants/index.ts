import { cva } from "class-variance-authority";

export interface Product {
  name: string;
  brand: string;
  model: string;
  category: string;
  footprint: number;
}

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export const carbonEmitters = [
  {
    line1: "HIGHEST CARBON",
    line2: "EMITTER",
    country: "CHINA",
    emissions: "10.7 billion metric tons",
    percentage: "30%",
    progressValue: 30,
  },
  {
    line1: "SECOND HIGHEST",
    line2: "CARBON EMITTER",
    country: "USA",
    emissions: "5 billion metric tons",
    percentage: "14%",
    progressValue: 14,
  },
  {
    line1: "THIRD HIGHEST",
    line2: "CARBON EMITTER",
    country: "INDIA",
    emissions: "2.9 billion metric tons",
    percentage: "7%",
    progressValue: 7,
  },
];

// Main product list
export const products: Product[] = [
  {
    name: "Laptop",
    brand: "Brand A",
    model: "Model X",
    category: "Electronics",
    footprint: 50,
  },
  {
    name: "Laptop",
    brand: "Brand B",
    model: "Model Y",
    category: "Electronics",
    footprint: 80,
  },
  {
    name: "Bag",
    brand: "Brand C",
    model: "Model Z",
    category: "Clothing and Apparels",
    footprint: 20,
  },
  {
    name: "Bag",
    brand: "Brand C",
    model: "Model Z",
    category: "Clothing and Apparels",
    footprint: 25,
  },
  {
    name: "Refrigerator",
    brand: "Brand D",
    model: "Model W",
    category: "Household Essentials",
    footprint: 100,
  },
  {
    name: "Refrigerator",
    brand: "Brand F",
    model: "Model X",
    category: "Household Essentials",
    footprint: 120,
  },
];

// Separate list for recommended products
export const recommendationList: Product[] = [
  {
    name: "Laptop",
    brand: "Brand X",
    model: "Model A1",
    category: "Electronics",
    footprint: 30,
  },
  {
    name: "Laptop",
    brand: "Brand Y",
    model: "Model B2",
    category: "Electronics",
    footprint: 55,
  },
  {
    name: "Bag",
    brand: "Brand Z",
    model: "Model C3",
    category: "Clothing and Apparels",
    footprint: 10,
  },
  {
    name: "Bag",
    brand: "Brand C",
    model: "Model F5",
    category: "Clothing and Apparels",
    footprint: 15,
  },
  {
    name: "Refrigerator",
    brand: "Brand D2",
    model: "Model W1",
    category: "Household Essentials",
    footprint: 75,
  },
  {
    name: "Refrigerator",
    brand: "Brand E4",
    model: "Model S",
    category: "Household Essentials",
    footprint: 70,
  },
];
