import { CONSULTANCIES } from "data";
import { List } from "components";
import styles from "./Consultancy.module.css";

const Consultancy = () => {
  return (
    <section id="consultorias" className={styles.consultancy}>
      <div className="container">
        <span className={styles.title}>Consultorias</span>

        <List
          list={CONSULTANCIES}
          customStyleContainer={styles.list}
          customStyleItem={styles.listItem}
        />
      </div>
    </section>
  );
};

export default Consultancy;
