import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ActiveSectionProvider } from "../context/active-section"
import { ThemeProvider } from "../components/theme-provider"
import GradientBackground from "../components/gradient-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: 'Martin Beroiza | Portfolio',
  description: 'Portafolio profesional de Martin Beroiza, Analista Programador especializado en desarrollo web y móvil.',
  keywords: 'desarrollo web, programación, react, next.js, portafolio',
  openGraph: {
    title: 'Martin Beroiza | Portafolio',
    description: 'Portafolio  Martin Beroiza',
    siteName: 'Martin Beroiza ',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Martin Beroiza Portafolio',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
            <GradientBackground />
            {children}
        </ThemeProvider>
      </body>
    </html>
  )
}