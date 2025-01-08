import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
	return (
		<div className="app">
			<section id="Home">
				<Navbar displayText={"Yan"} />
				<Hero />
			</section>
			<section id="About">
				<Navbar displayText={"About"} />
				<About />
			</section>
			<section id="Portfolio">
				<Portfolio />
			</section>
			<section id="Contact"><Contact/></section>
		</div>
	);
};

export default App;
