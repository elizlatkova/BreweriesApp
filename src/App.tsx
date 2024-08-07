import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

import { NavBar } from "./components/Navbar/Navbar";
import { HomePage } from "./pages/HomePage/HomePage";
import { RandomBrewery } from "./pages/RandomBrewery/RandomBrewery";
import { Favorites } from "./pages/Favorites/Favorites";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/random" element={<RandomBrewery/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
