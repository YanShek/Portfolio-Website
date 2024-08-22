import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Test from "./Test";

const App = () => {
  return <div>
    <section id="Home">
      <Navbar/>
      <Hero/>
    </section>
    <section id="About"> About Me</section>  
    <section id="Portfolio">Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section> 
  
  </div>;

};

export default App;
