import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"
import Timeline from "@/components/timeline"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Timeline />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

