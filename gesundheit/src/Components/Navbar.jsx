import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuZeigen, setMenuZeigen] = useState(false);

  return (
    <nav>
      <Link to="/" className="logo">
        Mach <br /> Dich🍃 <br /> Gesund
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuZeigen(!menuZeigen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuZeigen ? "zeigen" : ""}>
        <li>
          <Link
            onClick={() => {
              setMenuZeigen(!menuZeigen);
            }}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setMenuZeigen(!menuZeigen);
            }}
            to="/rezepte"
          >
            Rezepte
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setMenuZeigen(!menuZeigen);
            }}
            to="/todo"
          >
            TodoList
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setMenuZeigen(!menuZeigen);
            }}
            to="/leistungen"
          >
            Leistungen
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setMenuZeigen(!menuZeigen);
            }}
            to="/kontakt"
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
