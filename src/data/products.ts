export type CategoryId = "perfumes" | "clothing" | "household" | "children";

export interface Category {
  id: CategoryId;
  label: string;
  tagline: string;
}

export interface Product {
  id: string;
  category: CategoryId;
  name: string;
  image: string;
  description?: string;
}

export const categories: Category[] = [
  {
    id: "perfumes",
    label: "Perfumes",
    tagline: "Fragrances that leave an impression.",
  },
  {
    id: "clothing",
    label: "Clothing",
    tagline: "Everyday style with a touch of confidence.",
  },
  {
    id: "household",
    label: "Household Items",
    tagline: "Practical essentials for a beautiful home.",
  },
  {
    id: "children",
    label: "Children's Wear",
    tagline: "Comfortable and beautiful pieces for little ones.",
  },
];

/**
 * Add or replace product images by dropping files into
 * /public/images/{category}/ and pointing `image` at that path.
 * File does not exist yet? An elegant placeholder renders instead —
 * nothing breaks while real photos are being added.
 */
export const products: Product[] = [
  // Perfumes
  { id: "perfume-1", category: "perfumes", name: "Khamrah by Lattafa", image: "/images/perfumes/1.jpg" },
  { id: "perfume-2", category: "perfumes", name: "Perfume Mist Trio", image: "/images/perfumes/2.jpg" },

  // Clothing
  { id: "clothing-1", category: "clothing", name: "Graphic Print Shirt", image: "/images/clothing/1.jpg" },
  { id: "clothing-2", category: "clothing", name: "Moissanite Ring", image: "/images/clothing/2.jpg" },
  { id: "clothing-3", category: "clothing", name: "Luxury Timepiece", image: "/images/clothing/3.jpg" },

  // Household
  { id: "household-1", category: "household", name: "Foldable Bed Table", image: "/images/household/1.jpg" },
  { id: "household-2", category: "household", name: "Shower Organizer Rack", image: "/images/household/2.jpg" },
  { id: "household-3", category: "household", name: "6-Piece Cookware Set", image: "/images/household/3.jpg" },

  // Children
  { id: "children-1", category: "children", name: "Printed Jogger Shorts", image: "/images/children/1.jpg" },
  { id: "children-2", category: "children", name: "Cream Printed Set", image: "/images/children/2.jpg" },
  { id: "children-3", category: "children", name: "Character Print Shorts", image: "/images/children/3.jpg" },
];

export const productsByCategory = (id: CategoryId) =>
  products.filter((p) => p.category === id);

export const siteImages = {
  hero: "/images/hero/main.jpg",
  heroSlides: [
    "/images/hero/main.jpg",
    "/images/perfumes/1.jpg",
    "/images/clothing/1.jpg",
    "/images/household/1.jpg",
    "/images/children/1.jpg",
    "/images/brand/about-1.jpg",
    "/images/perfumes/2.jpg",
    "/images/clothing/2.jpg",
    "/images/household/2.jpg",
    "/images/children/2.jpg",
    "/images/brand/about-2.jpg",
    "/images/clothing/3.jpg",
    "/images/household/3.jpg",
    "/images/children/3.jpg",
    "/images/brand/statement.jpg",
  ],
  aboutPrimary: "/images/brand/about-1.jpg",
  aboutSecondary: "/images/brand/about-2.jpg",
  statement: "/images/brand/statement.jpg",
};

export const business = {
  name: "OJ LUXE",
  location: "Benin / Abraka",
  whatsapp: "09117665659",
  whatsappIntl: "2349117665659",
  tiktok: "@ojluxe1",
  tiktokUrl: "https://www.tiktok.com/@ojluxe1",
};

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${business.whatsappIntl}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};
