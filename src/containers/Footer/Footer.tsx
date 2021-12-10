import styles from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.copyright}>
          <span>
            © {year} | <b>Eng.Seg</b> | <br /> Todos os direitos reservados
          </span>

          <a
            href="https://api.whatsapp.com/send?phone=5541999023899&text=Ol%C3%A1%20entro%20contato%20atav%C3%A9s%20do%20site%20da%20EngSeg,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
            target="_blank"
            rel="noreferrer"
          >
            Desenvolvido por Gabriel Oczust
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
