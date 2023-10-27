import React from "react";

export default function HeaderNav({ onPageChange }) {
  return (
    <>
      <header className="Header-profile Flex-Tengah">WEB DEVELOPMENT</header>

      <div className="navbar Flex-Tengah">
        <button
          className={`navbar-child Flex-Tengah`}
          onClick={() => onPageChange("Biodata")}
        >
          Biodata
        </button>
        <button
          className={`navbar-child Flex-Tengah`}
          onClick={() => onPageChange("Profile")}
        >
          Profile
        </button>
        <button
          className={`navbar-child Flex-Tengah`}
          onClick={() => onPageChange("Form")}
        >
          Form
        </button>
      </div>
    </>
  );
}
