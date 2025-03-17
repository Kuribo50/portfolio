'use client'

import * as React from 'react'

type ThemeProviderProps = {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: string
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Siempre usa el tema oscuro, ignorando cualquier intento de cambio
  return (
    <div className="dark">
      {children}
    </div>
  )
}
