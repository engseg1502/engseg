import Image from "next/image";
import { contacts } from "data";
import styles from "./Whatsapp.module.css";

const Whatsapp = () => {
  return (
    <a
      href={contacts.whatsapp}
      target="_blank"
      rel="noreferrer"
      className={styles.whatsapp}
      title="Clique e Solicite uma proposta pelo Whatsapp"
    >
      <div className={styles.desk}>
        <Image src="/svgs/whatsapp.svg" alt="WhatsApp" width={64} height={30} />
      </div>

      <div className={styles.mobile}>
        <Image src="/svgs/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
      </div>

      <span>Solicite uma proposta</span>
    </a>
  );
};

export default Whatsapp;
