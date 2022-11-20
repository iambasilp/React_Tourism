import React from "react";
import "./Header.css";

export default function Header() {
  return <div className="header">
    <div className="header-logo">
        <h3>Logo</h3>
    </div>
    <ul className="header-menu">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
  </div>;
}
