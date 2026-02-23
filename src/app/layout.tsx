import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Imersão Protagonistas de Resultados – Vitória 2026 | Enjoy",
  description:
    "Desbloqueie seu potencial máximo na Imersão Protagonistas de Resultados – Vitória 2026, com o apoio estratégico da Enjoy. 24 e 25 de Março de 2026. Presencial, All Inclusive.",
  keywords: [
    "imersão liderança",
    "protagonistas de resultados",
    "vitória 2026",
    "enjoy",
    "gestão empresarial",
    "desenvolvimento líderes",
  ],
  openGraph: {
    title: "Imersão Protagonistas de Resultados – Vitória 2026 | Enjoy",
    description:
      "Evento presencial e All Inclusive. 24 e 25 de Março de 2026, Vitória/ES.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body className={`${montserrat.className} bg-primary text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
