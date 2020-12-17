import "./App.css";
import BackgroundSlideshow from "react-background-slideshow";
import beer from "./images/beer-min.jpg";
import liquor from "./images/liquor-min.jpg";
import wine from "./images/wine-min.jpg";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import { MDBBtn } from "mdbreact";


function App() {
	return (
		<div className="App">
			<Navbar />
			<header className="App-header">
        <Form />
        <br />
        <MDBBtn color="blue-grey">Search For Drinks</MDBBtn>
      </header>
			<BackgroundSlideshow
				images={[beer, liquor, wine]}
				animationDelay={5000}
			/>
		</div>
	);
}

export default App;
