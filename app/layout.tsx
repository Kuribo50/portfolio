import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ActiveSectionProvider } from "../context/active-section"
import { ThemeProvider } from "../components/theme-provider"
import GradientBackground from "../components/gradient-background"
import Favicon from '../components/favicon'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Martin Beroiza | Desarrollador Full Stack',
  description: 'Portafolio profesional de Martin Beroiza, desarrollador Full Stack Junior especializado en React, Next.js, Node.js y desarrollo web moderno.',
  keywords: [
    'desarrollador full stack', 
    'programación web', 
    'react', 
    'next.js', 
    'node.js', 
    'javascript', 
    'typescript', 
    'frontend', 
    'backend', 
    'desarrollador junior',
    'portafolio web',
    'desarrollador web Chile'
  ],
  authors: [{ name: 'Martin Beroiza' }],
  creator: 'Martin Beroiza',
  publisher: 'Martin Beroiza',
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://martinberoiza.vercel.app/',
    title: 'Martin Beroiza | Desarrollador Full Stack',
    description: 'Desarrollador Full Stack Junior con experiencia en tecnologías modernas de desarrollo web. Creando soluciones digitales innovadoras y funcionales.',
    siteName: 'Martin Beroiza - Portafolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Martin Beroiza - Desarrollador Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Martin Beroiza | Desarrollador Full Stack',
    description: 'Desarrollador Full Stack Junior especializado en React, Next.js y Node.js. Explorando nuevas tecnologías y creando experiencias digitales únicas.',
    images: ['/og-image.jpg'],
    creator: '@martinberoiza',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  category: 'Tecnología',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5'
      }
    ]
  },
  manifest: '/site.webmanifest',
  applicationName: 'Martin Beroiza Portfolio',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <Favicon />
        <ThemeProvider defaultTheme="dark">
          <ActiveSectionProvider>
            <GradientBackground />
            {children}
            <SpeedInsights />
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}