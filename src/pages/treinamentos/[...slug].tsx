import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";

import { trainings } from "data";
import { titleToSlug } from "helpers";

import styles from "./Treinamentos.module.css";

const Training: NextPage = () => {
  const {
    query: { slug },
    push,
  } = useRouter();

  const slugTraining = slug?.[0];
  const training = trainings.find(
    (training) => titleToSlug(training.title) === slugTraining
  );

  if (!training) {
    push("/");
    return null;
  }

  const { title, text, img } = training;

  return (
    <div className={styles.container}>
      <div className="container">
        <article className={styles.training}>
          <h1 className={styles.title}>{title}</h1>

          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <Image
                src={`/images/trainings/${img}`}
                alt={title}
                width={500}
                height={624}
                className={styles.image}
              />
            </div>

            <p
              className={styles.text}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
        </article>
      </div>
    </div>
  );
};

export default Training;
