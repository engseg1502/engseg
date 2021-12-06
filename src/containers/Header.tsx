import Image from "next/image";
import imageLogo from "assets/images/eng_seg_logo.png";
import styles from "styles/Header.module.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className={styles.nav}>
          <Image src={imageLogo} alt="logo" width={125} height={100} />
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
