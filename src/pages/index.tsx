import type { NextPage } from "next";
import Image from "next/image";

import { Header, Footer } from "containers";
import { AnimatedLink } from "components";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <section id="quemSomos" className={styles.section__quemSomos}>
            <Image
              src="/images/quem_somos.jpeg"
              alt="Quem somos"
              className={styles.imageRounded}
              width={250}
              height={480}
            />
            <article>
              <h3>Quem Somos ?</h3>

              <p>
                Atuamos no segmento de treinamento e assessoria em segurança,
                meio ambiente e saúde industrial, nosso foco é ajudar empresas a
                se regulamentar capacitando-as dentro das normas vigentes e com
                isto proporcioná-las um ambiente seguro e produtivo.
              </p>
              <p>
                Possuímos importantes parcerias com empresas no ramo da saúde
                ocupacional, segurança do trabalho, assim como distribuidores de
                EPIs, agentes de extintores, materiais de resgate e primeiros
                socorros.
              </p>
              <p>
                Corpo docente formado por médicos, engenheiros, técnicos,
                socorristas/resgatistas e bombeiros todos com proficiência nos
                assuntos ministrados.
              </p>

              <AnimatedLink title="Fale conosco pelo Whatsapp" to="test" />
            </article>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
