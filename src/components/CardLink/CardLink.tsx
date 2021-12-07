import Image from "next/image";
import styles from "./CardLink.module.css";

interface CardLinkProps {
  title: string;
  img: string;
  link: string;
}

const CardLink = ({ title, img, link }: CardLinkProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <div className={styles.card}>
        <Image
          src={`/images/${img}`}
          alt={title}
          className={styles.image}
          width={220}
          height={275}
        />
        <div className={styles.middle}>
          <a className={styles.link} href={link}>
            Saiba mais
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardLink;
