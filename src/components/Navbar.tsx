// src/components/Navbar.tsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdHome, MdFolder, MdMail } from "react-icons/md";
import styles from "./Navbar.module.css";
import { RxAvatar, RxHome } from "react-icons/rx";

const Navbar = () => {
  const desktopNavLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  const mobileNavLinks = [
    { to: "/", label: "Home", icon: <RxHome /> },
    { to: "/about", label: "About", icon: <RxAvatar /> },
    { to: "/projects", label: "Projects", icon: <MdFolder /> },
    { to: "/contact", label: "Contact", icon: <MdMail /> },
    
  ];

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <span className={styles.logoMark}>JJ</span>
        </div>

        <div className={styles.desktopMenu}>
          {desktopNavLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
      <nav className={styles.mobileBottomBar}>
        {mobileNavLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `${styles.mobileLink} ${isActive ? styles.active : ""}`
            }
          >
            <div className={styles.icon}>{link.icon}</div>
            <span className={styles.label}>{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
