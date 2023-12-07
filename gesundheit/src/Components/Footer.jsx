import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer className="Footer">
        <div className="footer-content">
          <div className="footer-section Kontakt">
            <h3>Kontakt</h3>
            <p> kontakt@mach.dich.gesund.de</p>
            <p>📞 +49 171 222279</p>
          </div>

          <div className="footer-section Links">
            <div>
              <h3>Links </h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/leistungen">Leistungen</a>
                </li>
                <li>
                  <a href="/kontakt">Kontakt</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>APP </h3>
              <ul>
                <li>
                  <a href="/rezepte">Rezepte</a>
                </li>
                <li>
                  <a href="/todo">Todo App</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-section Social-Media">
            <h3>
              Besuchen Sie unsere <br /> sozialen Seiten
            </h3>
            <div className="Img">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./icon/photo_2023-12-05_20-44-03.jpg" alt="" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./icon/photo_2023-12-05_20-45-35.jpg" alt="" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./icon/photo_2023-12-05_20-44-57.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <p>&copy; 2023 Ihr Unternehmen. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}

export default Footer;
