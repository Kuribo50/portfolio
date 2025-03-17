"use client"

import { createContext, useContext, useState } from "react"

type ActiveSectionContextType = {
  activeSection: string | null
  setActiveSection: (section: string | null) => void
  hoverSection: string | null
  setHoverSection: (section: string | null) => void
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [hoverSection, setHoverSection] = useState<string | null>(null)

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, hoverSection, setHoverSection }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext)
  if (!context) {
    throw new Error("useActiveSection must be used within an ActiveSectionProvider")
  }
  return context
}
