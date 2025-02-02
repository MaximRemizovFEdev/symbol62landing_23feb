import React, { useState, useEffect, useRef } from "react";
import Button from "../Button/Button";
import logoIcon from "../../images/logo.svg";
import vkIcon from "../../images/vk-icon.svg";
import telegramIcon from "../../images/telegram-icon.svg";
import * as styles from "./style.module.scss";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  const [dropdownItems, setDropdownItems] = useState([]);
  const navContainerRef = useRef(null);
  const navItemRefs = useRef([]);

  const navItems = [
    { href: "/", label: "Главная" },
    { href: "/vuzam", label: "ВУЗам" },
    { href: "/works", label: "Наши работы" },
    { href: "/about", label: "О нас" },
    { href: "#contact", label: "Контакты" },
  ];

  const updateMenu = () => {
    if (navContainerRef.current) {
      const containerWidth = navContainerRef.current.clientWidth;
      let totalWidth = 0;
      const visible = [];
      const dropdown = [];

      // Установка рефов и получение ширины элементов
      navItemRefs.current = navItems.map((_, index) => {
        return navItemRefs.current[index];
      });

      navItems.forEach((item, index) => {
        if (navItemRefs.current[index]) {
          const itemWidth =
            navItemRefs.current[index]?.getBoundingClientRect().width || 0;

          if (totalWidth + itemWidth <= containerWidth) {
            visible.push(item);
            totalWidth = totalWidth + itemWidth + 100;
          } else {
            dropdown.push(item);
          }
        }
      });

      setVisibleItems(visible);
      setDropdownItems(dropdown);
    }
  };

  useEffect(() => {
    // Обновляем меню при первоначальной загрузке и при изменении размера окна
    window.addEventListener("resize", updateMenu);
    updateMenu();

    return () => window.removeEventListener("resize", updateMenu);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="header" className={styles.header}>
      <div className={styles.quickContact}>
        <a id="logo" href="#">
          <img src={logoIcon} width={40} height={40} alt={"symb62"} />
        </a>
        <div className={styles.quickContactMenu}>
          <a href="tel:+79065435369">+7 (906) 543-53-69</a>
          <a href="https://vk.com/universymbols" target="_blank">
            <img
              src={vkIcon}
              width={40}
              height={40}
              alt={"vk.com/universymbols"}
            />
          </a>
          <a href="https://vk.com/universymbols" target="_blank">
            <img
              src={telegramIcon}
              width={40}
              height={40}
              alt={"vk.com/universymbols"}
            />
          </a>
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <Button
              text="сделать заказ"
              type="button"
              variant="fill"
              onClick={() => {}}
              size={"small"}
            />
          </div>
        </div>
      </div>
      <div className={styles.nav} ref={navContainerRef}>
        {(visibleItems.length ? visibleItems : navItems).map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            className={styles.navlink}
            ref={(el) => {
              if (el) navItemRefs.current[index] = el;
            }} // Установка рефов
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        {dropdownItems.length > 0 && (
          <div className={styles.burger} onClick={toggleMenu}>
            &#9776; {/* Символ бургера */}
          </div>
        )}
        {isMenuOpen && dropdownItems.length > 0 && (
          <div className={styles.dropdown}>
            {dropdownItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={styles.dropdownItem}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
