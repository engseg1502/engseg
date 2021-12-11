import { useEffect, useState } from "react";

import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";

import { trainings } from "data";
import { TrainingInterface } from "interfaces";
import { titleToSlug } from "helpers";

import styles from "./Treinamentos.module.css";

const Training: NextPage = () => {
  const router = useRouter();

  const [training, setTraining] = useState<TrainingInterface | undefined>(
    undefined
  );

  useEffect(() => {
    const goToHome = () => {
      router.push("/");
    };

    const slugTraining = router.query.slug?.[0];

    if (!slugTraining) goToHome();

    const getTraining = trainings.find(
      (training) => titleToSlug(training.title) === slugTraining
    );

    if (!getTraining) goToHome();

    setTraining(getTraining);
  }, [router]);

  if (!training) {
    return <div>Carregando...</div>;
  }

  return (
    <div className={styles.container}>
      <div className="container">
        <article className={styles.training}>
          <h1 className={styles.title}>{training.title}</h1>

          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <Image
                src={`/images/trainings/${training.img}`}
                alt={training.title}
                width={500}
                height={624}
                className={styles.image}
              />
            </div>

            <p
              className={styles.text}
              dangerouslySetInnerHTML={{ __html: training.text }}
            />
          </div>
        </article>
      </div>
    </div>
  );
};

export default Training;
