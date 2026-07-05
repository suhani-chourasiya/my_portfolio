import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      <Background/>
    </>
  );
}

export default App;