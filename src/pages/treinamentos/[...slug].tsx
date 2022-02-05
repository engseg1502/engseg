import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

import { TRAININGS } from "data";
import { TrainingInterface } from "interfaces";
import { titleToSlug } from "helpers";

import styles from "./Treinamentos.module.css";

export interface Props {
  training: TrainingInterface;
}

const Training: NextPage<Props> = ({ training }) => {
  return (
    <>
      <Head>
        <title>{training.title} - Treinamento</title>
        <meta name="description" content={training.seo.description} />
        <meta property="og:description" content={training.seo.description} />
        <meta
          property="og:url"
          content={`https://www.exclusividros.com.br/treinamentos/${training.slug}`}
        />
        <meta name="keywords" content={training.seo.keywords.join(", ")}></meta>
      </Head>

      <div className={styles.container}>
        <div className="container">
          <article className={styles.training}>
            <h1 className={styles.title}>Treinamento - {training.title}</h1>

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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = TRAININGS.map((training) => ({
    params: {
      slug: [titleToSlug(training.title)],
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug?.[0];

  const training = TRAININGS.find(
    (training) => titleToSlug(training.title) === slug
  );

  return {
    props: {
      training: {
        ...training,
        slug,
      },
    },
  };
};
