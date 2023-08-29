
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Spacing from "./components/spacing";
import Spacing2 from "./components/spacing2";

function App() {

  return (
    <>
    <div>
      <NavBar />
      <Home />
      <Spacing2 />
      <About />
      <Spacing />
      <Portfolio />
      <Spacing />
      <Experience />
      <Spacing />
      <Contact />
      <Spacing />
      <Footer />
      <SocialLinks />
    </div>
    </>
  );
}

export default App
