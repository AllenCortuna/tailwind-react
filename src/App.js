import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Login from "./component/Login";
import Record from "./component/Record";
import Notfound from "./component/Notfound";
import About from "./component/About";
import Menu from "./component/Menu";
import Search from "./component/Search";
import Chart from "./component/Chart";
import Term from "./component/Term";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notfound" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/term" element={<Term />} />

        <Route path="/search" element={<Search />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/record" element={<Record />} />
        <Route path="/menu" element={<Menu />} />

        <Route path="/*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
