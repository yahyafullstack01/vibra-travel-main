import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@/app/globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { PageTransition } from "@/components/PageTransition/PageTransition";
import { HashScroll } from "@/components/HashScroll/HashScroll";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import { LocaleProvider } from "@/components/LocaleProvider/LocaleProvider";
import { PwaRegister } from "@/components/PwaRegister/PwaRegister";

const APP_NAME = "Vibra Travel";
const APP_DESCRIPTION =
  "Personalised padel holidays in Spain — combining court time with authentic Spanish experiences.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  icons: [
    { rel: "icon", url: "/Logo.svg", type: "image/svg+xml" },
    { rel: "apple-touch-icon", url: "/icons/apple-touch-icon.png" },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: APP_NAME,
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F44C30" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1522" },
  ],
  colorScheme: "light dark",
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
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body>
        <Script id="vibra-theme-locale-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('vibra-theme');if(t==='dark')document.documentElement.setAttribute('data-theme','dark');var seg=location.pathname.split('/').filter(Boolean)[0];var loc=(seg==='es'||seg==='fr'||seg==='ru'||seg==='ar')?seg:(localStorage.getItem('vibra-locale')||'en');if(!(loc==='ru'||loc==='ar'||loc==='es'||loc==='fr'||loc==='en'))loc='en';localStorage.setItem('vibra-locale',loc);document.documentElement.setAttribute('lang',loc);document.documentElement.setAttribute('dir',loc==='ar'?'rtl':'ltr');}catch(e){}})();`}
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
            <PwaRegister />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
