import Image from "next/image";
import { contacts } from "data";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contato" className={styles.contact}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.content}>
            <span className={styles.title}>Entre em Contato</span>

            <span className={styles.text}>Telefone: (41) 9 9695-4434</span>
            <span className={styles.text}>E-mail: edevaldo@engseg.art.br</span>
          </div>

          <div className={styles.socials}>
            <a
              className={`${styles.social} ${styles.facebook}`}
              href={contacts.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/svgs/facebook.svg"
                alt="Facebook"
                title="Facebook"
                width={30}
                height={30}
              />
            </a>

            <a
              className={`${styles.social} ${styles.instagram}`}
              href={contacts.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/svgs/instagram.svg"
                alt="Instagram"
                title="Instagram"
                width={30}
                height={30}
              />
            </a>

            <a
              className={`${styles.social} ${styles.whatsapp}`}
              href={contacts.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/svgs/whatsapp.svg"
                alt="Whatsapp"
                title="Whatsapp"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
