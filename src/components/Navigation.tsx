import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Navigation.module.css";

const navItems = [
  { name: "About", href: "/" },
  { name: "Experience", href: "/experiences" },
  { name: "Projects", href: "/projects" },
  { name: "Hobbies", href: "/hobbies" },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className={styles.sidebar}>
      <ul className={styles.navList}>
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(item.href);
          return (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={`${styles.navLink} ${isActive ? styles.active : ""}`}
              >
                <span className={styles.navLine} />
                <span className={styles.navText}>{item.name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function MobileNavigation() {
  const location = useLocation();

  return (
    <nav className={styles.mobileNav}>
      <ul className={styles.mobileNavList}>
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(item.href);
          return (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={`${styles.mobileNavLink} ${
                  isActive ? styles.mobileActive : ""
                }`}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
