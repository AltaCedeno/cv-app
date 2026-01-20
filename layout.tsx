import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Personalizamos el título y la descripción para tu Portafolio
export const metadata: Metadata = {
  title: "Altagracia Cedeño | Full Stack Developer",
  description: "Portafolio profesional de Altagracia Cedeño Sánchez, desarrolladora Full Stack con experiencia en React, Node.js y SQL.",
  keywords: ["Full Stack Developer", "React", "Node.js", "MySQL", "República Dominicana"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es"> {/* Cambiado a "es" para español */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}