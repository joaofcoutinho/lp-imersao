import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Imersão Protagonistas de Resultados – Vitória 2026 | Enjoy",
  description:
    "Desbloqueie seu potencial máximo na Imersão Protagonistas de Resultados – Vitória 2026, um evento da CNP com a Enjoy. 24 e 25 de Março de 2026. Presencial, All Inclusive.",
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
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1507018507938417');
            fbq('init', '2152149405189482');
            fbq('track', 'PageView');

            document.addEventListener('click', function(e) {
              var link = e.target.closest('a[href*="hsforms.com"]');
              if (link) {
                fbq('trackSingle', '2152149405189482', 'Lead');
              }
            });
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1507018507938417&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${montserrat.className} bg-primary text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
