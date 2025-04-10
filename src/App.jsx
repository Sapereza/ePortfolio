import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
       <div className="h-screen w-full bg-slate-100">
      <NavBar />
      <div style={{ height: '80px' }}></div> 
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <SocialLinks />
      <Analytics />
    </div>
    </>
  )
}

export default App
