import type { Metadata } from "next";
import Script from "next/script";
import "@/app/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { HashScroll } from "@/components/HashScroll";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LocaleProvider } from "@/components/LocaleProvider";

export const metadata: Metadata = {
  title: "Vibra Travel",
  icons: [{ rel: "icon", url: "/Logo.svg", type: "image/svg+xml" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/elsa"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@400;500;700&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Host+Grotesk&amp;display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script id="vibra-theme-locale-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('vibra-theme');if(t==='dark')document.documentElement.setAttribute('data-theme','dark');var L=localStorage.getItem('vibra-locale');var loc=(L==='ru'||L==='ar'||L==='es'||L==='fr'||L==='en')?L:'en';document.documentElement.setAttribute('lang',loc);document.documentElement.setAttribute('dir',loc==='ar'?'rtl':'ltr');}catch(e){}})();`}
        </Script>
        <ThemeProvider>
          <LocaleProvider>
            <div className="app">
              <Header />
              <HashScroll />
              <main className="content">
                <PageTransition>{children}</PageTransition>
              </main>
              <Footer />
            </div>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
