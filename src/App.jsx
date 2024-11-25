import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Test from "./Test";

const App = () => {
  return <div>
    <section id="Home">
      <Navbar displayText={"Yan"}/>
      <Hero/>
    </section>
    <section id="About">Aboot</section>  
    <section id="Portfolio"><Portfolio/></section>
    <section id="Contact">Contact</section> 
  
  </div>;

};

export default App;
