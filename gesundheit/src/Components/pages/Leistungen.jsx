import React, { useState } from "react";
import "./Leistungen.css";

const coaches = [
  {
    id: 1,
    name: "Elena",
    imag: "./coach/photo_2023-12-04_20-48-17.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    name: "Anna",
    imag: "./coach/photo_2023-12-04_20-48-18-(2).jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    name: "Polina",
    imag: "./coach/photo_2023-12-04_20-48-18-(3).jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    name: "Roman",
    imag: "./coach/photo_2023-12-04_20-48-17 (2).jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 5,
    name: "Katy",
    imag: "./coach/photo_2023-12-04_20-48-19.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 6,
    name: "Andreas",
    imag: "./coach/photo_2023-12-04_20-48-19 (2).jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 7,
    name: "Michael",
    imag: "./coach/photo_2023-12-04_20-48-20.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 8,
    name: "Naomi",
    imag: "./coach/photo_2023-12-04_20-48-21 (3).jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 9,
    name: "Aleks",
    imag: "./coach/photo_2023-12-04_20-48-21 (2).jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 10,
    name: "Veronika",
    imag: "./coach/photo_2023-12-04_20-48-21.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 11,
    name: "Christina",
    imag: "./coach/photo_2023-12-04_20-48-22.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

function Leistungen() {
  const [selectedCoach, setSelectedCoach] = useState(null);

  const openModal = (coach) => {
    setSelectedCoach(coach);
  };

  const closeModal = () => {
    setSelectedCoach(null);
  };

  const handlePurchase = () => {
    console.log(`melden ${selectedCoach.name}`);
    closeModal();
  };

  return (
    <div className="coach-titel">
      <h1>Unsere Coachen</h1>
      <p>Hier können Sie Ihren persönlichen Trainer auswählen.</p>
      <div className="coach-grid">
        {coaches.map((coach) => (
          <div className="coach-card" key={coach.id}>
            <img
              src={coach.imag}
              alt={coach.name}
              onClick={() => openModal(coach)}
            />
            <p>{coach.name}</p>
            <button
              className="coach-card-button"
              onClick={() => openModal(coach)}
            >
              Mehr Information
            </button>
          </div>
        ))}

        {selectedCoach && (
          <div className="modal">
            <div className="modal-content">
              <h2>{selectedCoach.name}</h2>
              <p>{selectedCoach.description}</p>
              <button className="button" onClick={handlePurchase}>
                Melden
              </button>
              <button className="button close" onClick={closeModal}>
                zumachen
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Leistungen;
