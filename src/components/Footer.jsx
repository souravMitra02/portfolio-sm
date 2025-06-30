import React from 'react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-[#1B1E22] text-white p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by | Sourav Mitra</p>
  </aside>
</footer>
    );
};

export default Footer;