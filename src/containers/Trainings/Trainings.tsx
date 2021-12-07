import { CardLink } from "components";
import styles from "./Trainings.module.css";

const Trainings = () => {
  return (
    <section id="treinamentos" className={styles.trainings}>
      <div className="container">
        <span className={styles.title}>Treinamentos</span>
        <CardLink
          title="Operador de Ponte Rolante"
          link="Operador"
          img="operador-ponte-rolante.png"
        />
      </div>
    </section>
  );
};

export default Trainings;
