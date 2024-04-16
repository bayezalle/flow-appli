// import logo from './logo.svg';
// import './App.css';
import Footer from './Compenets/Footer/Footer';
import Home from './Compenets/Home/Home';
import Nav from './Compenets/Nav/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
} 

export default App;
