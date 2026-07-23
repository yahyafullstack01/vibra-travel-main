import type { Metadata } from "next";
import Script from "next/script";
import "@/app/globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { PageTransition } from "@/components/PageTransition/PageTransition";
import { HashScroll } from "@/components/HashScroll/HashScroll";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import { LocaleProvider } from "@/components/LocaleProvider/LocaleProvider";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
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
          {`(function(){try{var t=localStorage.getItem('vibra-theme');if(t==='dark')document.documentElement.setAttribute('data-theme','dark');var k='vibra-locale',vk='vibra-locale-default',vv='en-v1';var L=localStorage.getItem(k);if(localStorage.getItem(vk)!==vv){L='en';localStorage.setItem(k,L);localStorage.setItem(vk,vv);}var loc=(L==='ru'||L==='ar'||L==='es'||L==='fr'||L==='en')?L:'en';document.documentElement.setAttribute('lang',loc);document.documentElement.setAttribute('dir',loc==='ar'?'rtl':'ltr');}catch(e){}})();`}
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
