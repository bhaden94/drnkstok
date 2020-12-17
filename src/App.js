import "./App.css";
import BackgroundSlideshow from 'react-background-slideshow'
import beer from "./images/beer-min.jpg";
import liquor from "./images/liquor-min.jpg";
import wine from "./images/wine-min.jpg";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>header</h1>
			</header>
      <BackgroundSlideshow images={[ beer, liquor, wine ]} animationDelay={5000} />
		</div>
	);
}

export default App;
