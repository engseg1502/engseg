import Image from "next/image";
import { CONTACTS } from "data";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contato" className={styles.contact}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.content}>
            <span className={styles.title}>Entre em Contato</span>

            <a
              className={styles.text}
              href={CONTACTS.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Telefone: (41) 9 9695-4434
            </a>

            <a className={styles.text} href={CONTACTS.mail}>
              E-mail: edevaldo@engseg.art.br
            </a>
          </div>

          <div className={styles.socials}>
            <a
              className={`${styles.social} ${styles.facebook}`}
              href={CONTACTS.facebook}
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
              href={CONTACTS.instagram}
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
              href={CONTACTS.whatsapp}
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
