import { CONSULTANCIES } from "data";
import { List } from "components";
import styles from "./Consultancy.module.css";

const Consultancy = () => {
  return (
    <section id="consultorias" className={styles.consultancy}>
      <div className="container">
        <h2 className={styles.title}>Consultorias</h2>

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
