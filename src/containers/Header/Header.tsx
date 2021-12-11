import { useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./Header.module.css";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const router = useRouter();

  const handleClickHamburger = () => {
    setMenuIsOpen((old) => !old);
  };

  const handleClickItemMenu = async (id: string) => {
    if (menuIsOpen) {
      setMenuIsOpen(false);
    }

    if (router.pathname !== "/") {
      await router.push("/");
    }

    const headerElement = document.getElementById("header");
    const yOffset = -Number(headerElement?.offsetHeight);

    const element = document.getElementById(id);
    const elementTop = Number(element?.getBoundingClientRect().top);

    const y = elementTop + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <header className={styles.header} id="header">
      <div className={`container ${styles.container}`}>
        <nav className={styles.nav}>
          <div
            className={styles.logo}
            title="Eng. Seg. - Acessoria e Treinamentos"
            onClick={() => handleClickItemMenu("banner")}
          >
            <Image src="/images/logo.png" alt="logo" width={125} height={88} />
          </div>

          <div className={styles.hamburguer} onClick={handleClickHamburger}>
            <span></span>
          </div>

          <div className={styles.menu} data-open={menuIsOpen}>
            <a onClick={() => handleClickItemMenu("quemSomos")}>Quem Somos</a>

            <a onClick={() => handleClickItemMenu("treinamentos")}>
              Treinamentos
            </a>

            <a onClick={() => handleClickItemMenu("serviços")}>Serviços</a>

            <a onClick={() => handleClickItemMenu("consultorias")}>
              Consultorias
            </a>

            <a onClick={() => handleClickItemMenu("clientes")}>Clientes</a>

            <a onClick={() => handleClickItemMenu("contato")}>Contato</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
