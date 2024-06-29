"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

import { X, Menu } from "lucide-react";
import { MenuProps } from "@/utils/menu.type";

interface SubMenuProp {
  menu: MenuProps;
}

export default function Submenu({ menu }: SubMenuProp) {
  //abrir submenu mobile
  const [isOpen, setIsOpen] = useState(false);

  console.log(menu);

  //verificação de largura para submenu mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    //Quando fizermos o resize na tela, chamamos a funçao
    window.addEventListener("resize", handleResize);

    //Caso o componente seja atualizado ou desmontado, removemos evento de resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <section className={styles.submenu}>
      <div className={styles.submenuIcon} onClick={toggleMenu}>
        <Menu size={34} color="#121212" />
        Menu
      </div>

      <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>
        {isOpen && (
          <button onClick={toggleMenu} className={styles.closeButton}>
            <X size={54} color="#121212" />
          </button>
        )}

        {menu.objects.map((item) => (
          <li>
            <Link href={`/post/${item.slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
