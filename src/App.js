import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Cards from './Components/Place/Cards';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
