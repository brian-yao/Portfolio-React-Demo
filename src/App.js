import { Switch, Route, useLocation } from "react-router-dom";
import GlobalStyle from "./globalStyle";
import HomePage from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


function App() {
	const location = useLocation();
	return (
		<div className="App">
			<GlobalStyle />
			<Switch location={location} key={location.pathname} >
				<HomePage exact path="/" />
				<Portfolio exact path="portfolio" component={Portfolio} />
				<Contact exact path="contact" component={Contact} />
			</Switch>
		</div>
	);
}

export default App;
