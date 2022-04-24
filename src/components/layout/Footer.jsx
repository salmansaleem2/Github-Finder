import React from "react";

const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center text-white">
      <div>
        <p>copyright &copy; {footerYear} All rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
