import Image from "next/image";
import styles from "./Banner.module.css";

interface BannerProps {
  img: {
    src: {
      desktop: string;
      mobile: string;
    };
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
      <div className={styles.imageDesk}>
        <Image src={img.src.desktop} alt={img.alt} height={345} width={1280} />
      </div>

      <div className={styles.imageMobile}>
        <Image src={img.src.mobile} alt={img.alt} height={600} width={992} />
      </div>

      <div className={styles.content}>
        <span className={styles.title}>{content.title}</span>
        <p className={styles.description}>{content.description}</p>
      </div>
    </div>
  );
};

export default Banner;
