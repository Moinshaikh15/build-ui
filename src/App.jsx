import "./App.css";
import About from "./components/about/About";
import Articles from "./components/article/Articles";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="app">
      <Home />
      <About />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
