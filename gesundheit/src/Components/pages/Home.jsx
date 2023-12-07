import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./Home.css";

function Home() {
  const images = [
    "/images/photo_2023-12-05_09-53-27.jpg",
    "/images/photo_2023-12-03_16-00-17.jpg",
    "/images/photo_2023-12-03_16-01-55.jpg",
    "/images/photo_2023-12-03_16-01-59.jpg",
    "/images/photo_2023-12-03_16-02-04.jpg",
    "/images/photo_2023-12-03_16-02-07.jpg",
    "/images/photo_2023-12-04_13-38-59.jpg",
    "/images/photo_2023-12-05_09-53-34.jpg",
    "/images/photo_2023-12-05_09-53-40.jpg",
  ];
  const [foto, setFoto] = useState(0);

  const letzteFoto = () => {
    setFoto((Bild) => (Bild === 0 ? images.length - 1 : Bild - 1));
  };
  const nexteFoto = () => {
    setFoto((Bild) => (Bild === images.length - 1 ? 0 : Bild + 1));
  };

  return (
    <div className="homeContainer">
      <div className="homeTitel">
        <h1>Herzlich Willkommen bei uns! </h1>
        <h2>Ernährung</h2>
        <p>
          Ernährung spielt eine große Rolle für die Gesundheit. Hier können Sie
          einen
          <Link className="link" to="/leistungen">
            {" "}
            persönlichen Coach{" "}
          </Link>
          auswählen , der Sie bei der Erstellung eines gesunden
          Ernährungsprogramms unterstützt. Alles basiert auf den neuesten
          wissenschaftlichen Erkenntnissen. Auch auf unserer Website finden Sie
          ein
          <Link className="link" to="/rezepte">
            {" "}
            Rezept{" "}
          </Link>
          , das zu Ihnen passt. Auf dieser Seite können Sie Ihren
          <Link className="link" to="/todo">
            {" "}
            TodoList{" "}
          </Link>
          erstellen.
        </p>
      </div>
      <div className="bildContainer">
        <button className="Button" onClick={letzteFoto}>
          <ArrowBackIosIcon />
        </button>
        <img src={images[foto]} alt={`slide ${foto + 1}`} />
        <button className="Button" onClick={nexteFoto}>
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
}

export default Home;
