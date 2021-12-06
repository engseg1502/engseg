import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className={styles.nav}>
          <Image
            src="/images/eng_seg_logo.png"
            alt="logo"
            width={125}
            height={100}
          />

          <div>
            <a href="#quemSomos">Quem Somos</a>
            <a href="#treinamentos">Treinamentos</a>
            <a href="#serviços">Serviços</a>
            <a href="#consultorias">Consultorias</a>
            <a href="#clientes">Clientes</a>
            <a href="#contato">Contato</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
