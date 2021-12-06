import Image from "next/image";
import { AnimatedLink } from "components";
import styles from "./WhoWeAre.module.css";

const WhoWeAre = () => {
  return (
    <section id="quemSomos" className={styles.woweare}>
      <div className="container">
        <div className={styles.section}>
          <Image
            src="/images/quem_somos.jpeg"
            alt="Quem somos"
            className={styles.imageRounded}
            width={250}
            height={480}
          />

          <article>
            <span className={styles.title}>Quem Somos ?</span>

            <p className={styles.text}>
              Atuamos no segmento de treinamento e assessoria em segurança, meio
              ambiente e saúde industrial, nosso foco é ajudar empresas a se
              regulamentar capacitando-as dentro das normas vigentes e com isto
              proporcioná-las um ambiente seguro e produtivo.
            </p>

            <p className={styles.text}>
              Possuímos importantes parcerias com empresas no ramo da saúde
              ocupacional, segurança do trabalho, assim como distribuidores de
              EPIs, agentes de extintores, materiais de resgate e primeiros
              socorros.
            </p>

            <p className={styles.text}>
              Corpo docente formado por médicos, engenheiros, técnicos,
              socorristas/resgatistas e bombeiros todos com proficiência nos
              assuntos ministrados.
            </p>

            <AnimatedLink title="Fale conosco pelo Whatsapp" to="test" />
          </article>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
