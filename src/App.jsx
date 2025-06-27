import { Route, Routes } from "react-router";
import "./App.css";
import Card from "./Components/Card/Card";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import GetStarted from "./Pages/GetStarted/GetStarted";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar></Navbar>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
