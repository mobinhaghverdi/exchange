import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home"
import Market from "./components/Market";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Fragment>
  );
}

export default App;
