import "./sass/style.scss";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import Container from "react-bootstrap/Container";
import Home from "../src/components/home/Home";
import Detail from "../src/components/detail/Detail";
import Contact from "../src/components/contact/Contact";
import Login from "../src/components/Login/Login";
import Admin from "../src/components/admin/Admin";
import Favorites from "../src/components/favorites/Favorites";
import { AuthProvider } from "./context/AuthContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Container>
            <Navigation />
            <Routes>
              <Route path="/" exact="true" element={<Home />} />
              <Route path="/favorites" element={<Favorites />}></Route>
              <Route path="/detail/:id" element={<Detail />}></Route>
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
            <Footer />
          </Container>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
