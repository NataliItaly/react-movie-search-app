import React from "react";

export default function Footer() {
  const currentYear = (() => {
    return new Date().getFullYear();
  })();

  return (
    <footer className="footer">
      <p className="footer__text">
        &copy; <span>{currentYear}</span> Movie Search App. All Rights Reserved.
      </p>
      <p className="footer__text">
        The App is created by{" "}
        <a
          className="footer_link"
          href="https://nataliitaly.github.io/rsschool-cv/"
        >
          Nataliya Krylova
        </a>
      </p>
    </footer>
  );
}
