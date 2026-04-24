export interface ProductVariant {
  id: string;
  name: string;
  label: string;
  color: string;
  accentColor: string;
  borderColor: string;
  bgGradient: string;
  imagePath: string;
  badge?: string;
}

export const variants: ProductVariant[] = [
  {
    id: "noir",
    name: "Noir Absolu",
    label: "Noir",
    color: "#1a1a1a",
    accentColor: "#C9A96E",
    borderColor: "#C9A96E",
    bgGradient: "radial-gradient(ellipse at 60% 40%, #2a2a2a 0%, #0d0d0d 100%)",
    imagePath: "/images/box_black.png",
    badge: "BEST-SELLER",
  },
  {
    id: "rose",
    name: "Rose Poudré",
    label: "Rose",
    color: "#C4856A",
    accentColor: "#A0522D",
    borderColor: "#C4856A",
    bgGradient: "radial-gradient(ellipse at 60% 40%, #f5cfc0 0%, #e8b49a 100%)",
    imagePath: "/images/box_prupale.png",
    badge: "NOUVEAU",
  },
  {
    id: "blanc",
    name: "Blanc Ivoire",
    label: "Blanc",
    color: "#EDE8DF",
    accentColor: "#8B7355",
    borderColor: "#C9A96E",
    bgGradient: "radial-gradient(ellipse at 60% 40%, #faf7f2 0%, #ede8df 100%)",
    imagePath: "/images/box_white.png",
  },
  {
    id: "vert",
    name: "Vert Émeraude",
    label: "Vert",
    color: "#2D5A3D",
    accentColor: "#C9A96E",
    borderColor: "#4a8c5c",
    bgGradient: "radial-gradient(ellipse at 60% 40%, #3d7a52 0%, #1e3d2a 100%)",
    imagePath: "/images/box_green.png",
    badge: "ÉPUISÉ",
  },
];

export const faqItems = [
  {
    id: "faq1",
    question: "Quels matériaux sont utilisés pour la fabrication ?",
    answer: "Nos coffrets sont fabriqués en cuir PU premium, avec des finitions artisanales soignées. L'intérieur est tapissé de velours doux pour protéger vos bijoux des rayures.",
  },
  {
    id: "faq2",
    question: "Quelle est la capacité de rangement du coffret ?",
    answer: "Notre coffret dispose de multiples compartiments : 12 emplacements pour bagues, 6 crochets pour colliers, 4 espaces pour montres et braclets, plus un tiroir secret pour vos pièces les plus précieuses.",
  },
  {
    id: "faq3",
    question: "Les délais et frais de livraison ?",
    answer: "La livraison est offerte en France Métropolitaine sous 3-5 jours ouvrés. La livraison express (24h) est disponible pour 9,90€. Livraison internationale disponible vers 30+ pays.",
  },
  {
    id: "faq4",
    question: "Proposez-vous une garantie satisfaction ?",
    answer: "Oui, nous offrons une garantie satisfait ou remboursé de 30 jours. Si le coffret ne vous convient pas, retournez-le en parfait état et nous vous rembourserons intégralement.",
  },
  {
    id: "faq5",
    question: "Peut-on personnaliser le coffret ?",
    answer: "Nous proposons la gravure d'un prénom ou message sur le couvercle (option payante). Idéal pour en faire un cadeau unique et inoubliable.",
  },
];

export const testimonials = [
  {
    id: "t1",
    name: "Camille R.",
    avatar: "CR",
    rating: 5,
    text: "Absolument magnifique ! La qualité est au rendez-vous et mes bijoux sont parfaitement organisés. Le coffret noir est d'une élégance folle.",
    location: "Paris",
  },
  {
    id: "t2",
    name: "Sophie M.",
    avatar: "SM",
    rating: 5,
    text: "J'ai offert le modèle blanc à ma mère pour son anniversaire et elle a fondu en larmes. Le packaging est luxueux et le coffret encore plus beau en vrai.",
    location: "Lyon",
  },
  {
    id: "t3",
    name: "Isabelle D.",
    avatar: "ID",
    rating: 5,
    text: "Enfin un coffret qui allie design et praticité ! Les compartiments sont parfaitement pensés. Je recommande les yeux fermés.",
    location: "Bordeaux",
  },
];
