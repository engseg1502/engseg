import { useEffect, useState } from "react";

import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import { TRAININGS } from "data";
import { TrainingInterface } from "interfaces";
import { titleToSlug } from "helpers";

import styles from "./Treinamentos.module.css";

const Training: NextPage = () => {
  const router = useRouter();

  const [training, setTraining] = useState<TrainingInterface | undefined>(
    undefined
  );

  const slugTraining = router.query.slug?.[0];

  useEffect(() => {
    const goToHome = () => {
      router.push("/");
    };

    if (!slugTraining) goToHome();

    const getTraining = TRAININGS.find(
      (training) => titleToSlug(training.title) === slugTraining
    );

    if (!getTraining) goToHome();

    setTraining(getTraining);
  }, [router, slugTraining]);

  if (!training) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Head>
        <title>{training.title} | Eng.Seg</title>
        <meta name="description" content={training.seo} />
        <meta property="og:description" content={training.seo} />
        <meta
          property="og:url"
          content={`https://www.exclusividros.com.br/treinamentos/${slugTraining}`}
        />
      </Head>

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
    </>
  );
};

export default Training;
