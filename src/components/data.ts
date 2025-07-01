export interface Certificate {
  title: string;
  image: string;
  issuer: string;
}

export const certificates: Certificate[] = [
  {
    title: "Web Development Certificate",
    image: "/public/certificates/certificate-api.jpg",
    issuer: "Udemy",
  },
  {
    title: "Gen-AI Certificate",
    image: "/public/certificates/gen-ai.jpg",
    issuer: "Udemy",
  },
  {
    title: "Web Development Certificate",
    image: "/public/certificates/react-redux.png",
    issuer: "Complete Coding",
  },
  {
    title: "Shopify-theme Development Certificate",
    image: "/public/certificates/shopify-theme-dev.jpg",
    issuer: "Udemy",
  },
  // Add more certificates here
];
