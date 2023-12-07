import React, { useState } from "react";
import "./Kontakt.css";
function Kontakt() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    birthDate: "",
    gender: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Gesendete Daten:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      birthDate: "",
      gender: "",
      message: "",
    });
  };

  return (
    <form className="kontakt-form" onSubmit={handleSubmit}>
      <h1>KONTAKT</h1>
      <label>
        Vorname*:
        <input
          className="input-kontakt"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Nachname*:
        <input
          className="input-kontakt"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        E-Mail*:
        <input
          className="input-kontakt"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Telefonnummer:
        <input
          className="input-kontakt"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {/* <small>Format: +1234567890</small> */}
      </label>
      <br />

      <label>
        Geburtsdatum:
        <input
          className="input-kontakt"
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Geschlecht*:
        <select
          className="input-kontakt"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Bitte auswählen</option>
          <option value="male">Männlich</option>
          <option value="female">Weiblich</option>
        </select>
      </label>
      <br />

      <label>
        Nachricht*:
        <textarea
          className="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <button className="button-kontakt" type="submit" onClick={handleSubmit}>
        Senden
      </button>
    </form>
  );
}

export default Kontakt;
