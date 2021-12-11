import { CardLink } from "components";
import { TRAININGS } from "data";
import { titleToSlug } from "helpers";

import styles from "./Trainings.module.css";

const Trainings = () => {
  return (
    <section id="treinamentos" className={styles.trainings}>
      <div className="container">
        <span className={styles.title}>Treinamentos</span>

        <div className={styles.grid}>
          {TRAININGS?.map(({ title, img }) => (
            <CardLink
              key={title}
              title={title}
              link={`/treinamentos/${titleToSlug(title)}`}
              img={`trainings/${img}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainings;
