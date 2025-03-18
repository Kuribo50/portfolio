"use client"

import { useEffect } from 'react'

export default function Favicon() {
  useEffect(() => {
    // Este enfoque agrega los favicons dinámicamente en el cliente
    const links = [
      {rel: 'icon', href: '/favicon.ico', sizes: 'any'},
      {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
      {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
      {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
      {rel: 'manifest', href: '/site.webmanifest'},
    ]
    
    links.forEach(linkProps => {
      const link = document.createElement('link')
      Object.entries(linkProps).forEach(([key, value]) => {
        link.setAttribute(key, value)
      })
      document.head.appendChild(link)
    })
    
    return () => {
      // Limpieza opcional
    }
  }, [])
  
  return null
} 