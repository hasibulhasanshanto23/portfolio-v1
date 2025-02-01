import { Murecho } from "next/font/google";
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Hasibul Hasan || Software Engineer",
  description:
    "A detail-oriented and creative Software Engineer with a strong foundation in web development technologies.",
  openGraph: {
    title: "Hasibul Hasan || Software Engineer",
    description:
      "A detail-oriented and creative Software Engineer with a strong foundation in web development technologies.",
    url: "https://www.imhasibul.com/",
    siteName: "Hasibul Hasan",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Hasibul Hasan - Software Engineer",
      },
    ],
    type: "website",
  },
};

const murecho = Murecho({
  weight: "variable",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${murecho.className} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
