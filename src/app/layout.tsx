import { Murecho } from "next/font/google";
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Hasibul Hasan || Software Engineer",
  description:
    "A detail-oriented and creative Software Engineer with a strong foundation in web development technologies and a passion for crafting user-friendly, responsive, and visually appealing interfaces.Experienced in optimizing performance, implementing accessibility standards, and collaborating with cross-functional teams to deliver high-quality solutions.",
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
