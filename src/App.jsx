import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Campus from "./pages/Campus/Campus";
import Contact from "./pages/Contact/Contact";
import Programs from "./pages/Programs/Programs";
import Testimonials from "./pages/Testimonials/Testimonials";
import ScrollToHashElement from "./components/ScrollToHashElement/ScrollToHashElement";

function App() {
  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
