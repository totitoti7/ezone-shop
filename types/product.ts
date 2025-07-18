export type Product = {
  id: number;
  title: string;
  description: string;
  SPrice: number; // sell price
  Caprice: number; // compare at price
  Images: string[]; // image filenames for imagekit
  Variants?: {
    SizeOptions?: string[];
    ColorOptions?: string[];
  };
};
