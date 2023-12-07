import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Leistungen from "./Components/pages/Leistungen";
import Home from "./Components/pages/Home";
import Rezepte from "./Components/pages/Rezepte";
import TodoList from "./Components/pages/TodoList";
import Kontakt from "./Components/pages/Kontakt";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rezepte" element={<Rezepte />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
