import React from "react";

const Footer = () => {
  return (
    <div className="border-t-2 border-slate-200 py-4">
      <p className="text-white text-center">
        &copy; {new Date().getFullYear()}, Okoye Augustine Izuchukwu
      </p>
    </div>
  );
};

export default Footer;
