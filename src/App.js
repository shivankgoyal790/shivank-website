import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Mainnav from "./shared/Mainnav";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import About from "./pages/about/About.js";
import Resume from "./pages/resume/Resume";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="position-relative p-0 d-lg-block d-none"
        style={{ minWidth: "220px", flex: "15%" }}
      >
        <Mainnav />
      </div>
      <div
        className="p-0 overflow-hidden"
        style={{ minheight: "100vh", flex: "85%" }}
      >
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
};

export default App;
