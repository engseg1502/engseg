import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.copyright}>
          <p className={styles.text}>
            {`© ${new Date().getFullYear()} `}Eng.Seg | Assessoria e
            Treinamentos <i>-</i> <span>Todos os Direitos Reservados</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
