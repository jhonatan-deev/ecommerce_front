import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from '@/lib/registry';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MinhaLoja",
  description: "Loja online construída com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}