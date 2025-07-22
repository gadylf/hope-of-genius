import type { Metadata } from "next";
import {  Red_Hat_Display } from "next/font/google";
import '../styles/globals.css';
import Navbar from "@/components/Navbar";
import  Footer from '@/components/Footer';

const redHat = Red_Hat_Display({ 
  subsets: ['latin'],
  variable: '--font-red-hat',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});


export const metadata: Metadata = {
  title: "Hope of Genius",
  description: "Hope of Genius - Révélons les talents de demain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={redHat.className}>
      <body className="bg-gray-50 text-gray-800">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        {/* Tu peux aussi ajouter un Footer ici */}
        <Footer />
      </body>
    </html>
  );
}
