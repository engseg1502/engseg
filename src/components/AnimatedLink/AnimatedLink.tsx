import styles from "./AnimatedLink.module.css";

interface AnimatedLinkProps {
  title: string;
  to: string;
}

const AnimatedLink = ({ title, to }: AnimatedLinkProps) => {
  return (
    <div className={styles.container}>
      <a href={to}>{title}</a>
    </div>
  );
};

export default AnimatedLink;
