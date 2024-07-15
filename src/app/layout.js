import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Go4Explore - Book Tours Packages, Backpacking Adventures, &amp; International Trips",
  description:
    "Explore amazing tour packages, group trips, thrilling treks, Domestic &amp; International travel packages with Go4Explore. Our team crafts the finest travel itineraries for your ideal journey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
