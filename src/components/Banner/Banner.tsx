import Image from "next/image";
import styles from "./Banner.module.css";

interface BannerProps {
  img: {
    src: string;
    alt: string;
  };
  content: {
    title: string;
    description: string;
  };
}

const Banner = ({ img, content }: BannerProps) => {
  return (
    <div className={styles.banner}>
      <Image src={img.src} alt={img.alt} height={345} width={1280} />

      <div className={styles.content}>
        <span className={styles.title}>{content.title}</span>
        <p className={styles.description}>{content.description}</p>
      </div>
    </div>
  );
};

export default Banner;
