import Image from "next/image";
import Link from "next/link";
import styles from "./CardLink.module.css";

interface CardLinkProps {
  title: string;
  img: string;
  link: string;
}

const CardLink = ({ title, img, link }: CardLinkProps) => {
  return (
    <Link href={link} passHref>
      <div className={styles.container} title={`Saiba mais sobre ${title}`}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.card}>
          <Image
            src={`/images/${img}`}
            alt={title}
            className={styles.image}
            width={220}
            height={275}
          />

          <div
            className={styles.link}
            aria-label={`Saiba mais sobre ${title}`}
          >
            Saiba mais
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardLink;
