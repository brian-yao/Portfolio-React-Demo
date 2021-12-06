import { Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyle";
import HomePage from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
			<HomePage />
			<Portfolio />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
