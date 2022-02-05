import styles from "./AnimatedLink.module.css";

interface AnimatedLinkProps {
  title: string;
  to: string;
  size?: "small" | "big";
}

const AnimatedLink = ({ title, to, size = "big" }: AnimatedLinkProps) => {
  return (
    <a
      href={to}
      target="_blank"
      rel="noreferrer"
      className={styles.button}
      data-size={size}
    >
      {title}
    </a>
  );
};

export default AnimatedLink;
