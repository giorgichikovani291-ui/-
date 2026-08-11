import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import About from "./Components/About"
import Careers from "./Components/Careers"
import Locations from "./Components/Locations"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
