import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Mainnav from "./Shared/Mainnav";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import About from "./Pages/About/About";
import Resume from "./Pages/Resume/Resume";
import Contact from "./Pages/Contact/Contact";

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
