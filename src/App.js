import "./App.css";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import CCT from "./components/body/CCT";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <CCT />
      <Footer/>
    </div>
  );
}

export default App;
