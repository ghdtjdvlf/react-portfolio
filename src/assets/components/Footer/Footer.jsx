// src/components/Footer.jsx
import React from "react";
import "./Footer.css";
import Dock from "../Dock/Dock.jsx";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";

export default function Footer() {
  const items = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () => alert("Home!"),
    },
    {
      icon: <VscArchive size={18} />,
      label: "Archive",
      onClick: () => alert("Archive!"),
    },
    {
      icon: <VscAccount size={18} />,
      label: "Profile",
      onClick: () => alert("Profile!"),
    },
    {
      icon: <VscSettingsGear size={18} />,
      label: "Settings",
      onClick: () => alert("Settings!"),
    },
  ];
  return (
    <footer className="footer">
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />

      <p className="footer-copy">&copy; 2025 Hong.dev. All rights reserved.</p>
    </footer>
  );
}
