import styles from "./AnimatedLink.module.css";

interface AnimatedLinkProps {
  title: string;
  to: string;
}

const AnimatedLink = ({ title, to }: AnimatedLinkProps) => {
  return (
    <a href={to} target="_blank" rel="noreferrer" className={styles.button}>
      {title}
    </a>
  );
};

export default AnimatedLink;
