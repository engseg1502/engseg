import { CardLink } from "components";

import { trainings } from "data/trainings";

import styles from "./Trainings.module.css";

const Trainings = () => {
  return (
    <section id="treinamentos" className={styles.trainings}>
      <div className="container">
        <span className={styles.title}>Treinamentos</span>
        <div className={styles.grid}>
          {trainings?.map(({ title, link, img }) => (
            <CardLink key={title} title={title} link={link} img={img} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainings;
