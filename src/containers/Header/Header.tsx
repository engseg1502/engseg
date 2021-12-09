import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleClickHamburger = () => {
    setMenuIsOpen((old) => !old);
  };

  const handleClickItemMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <nav className={styles.nav}>
          <Link href="/" passHref>
            <div className={styles.logo}>
              <Image
                src="/images/eng_seg_logo.png"
                alt="logo"
                width={125}
                height={88}
              />
            </div>
          </Link>

          <div className={styles.hamburguer} onClick={handleClickHamburger}>
            <span></span>
          </div>

          <div className={styles.menu} data-open={menuIsOpen}>
            <a onClick={handleClickItemMenu} href="#quemSomos">
              Quem Somos
            </a>
            <a onClick={handleClickItemMenu} href="#treinamentos">
              Treinamentos
            </a>
            <a onClick={handleClickItemMenu} href="#serviços">
              Serviços
            </a>
            <a onClick={handleClickItemMenu} href="#consultorias">
              Consultorias
            </a>
            <a onClick={handleClickItemMenu} href="#clientes">
              Clientes
            </a>
            <a onClick={handleClickItemMenu} href="#contato">
              Contato
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
