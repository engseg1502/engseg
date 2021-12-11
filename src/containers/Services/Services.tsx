import Image from "next/image";
import { ServicesList } from "components";
import { SERVICES } from "data";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <section id="serviços" className={styles.services}>
      <div className="container">
        <span className={styles.title}>Serviços</span>

        <p className={styles.subtitle}>
          Abaixo você confere os serviços que a Eng.Seg. pode oferecer para sua
          empresa.
        </p>

        <article className={styles.article}>
          <div className={styles.articleContainer}>
            <span className={styles.articleTitle}>
              SPDA - Sistema de proteção contra descargas atmosféricas
            </span>

            <ul className={styles.articleText}>
              <li>Elaboração de projeto para SPDA</li>
              <li>Readequação de estrutura para SPDA</li>
              <li>Emissão de laudo (projeto ou readequação)</li>
              <li>Instalação</li>
              <li>Atendemos os setores residenciais e industriais</li>
            </ul>
          </div>

          <div
            className={`${styles.articleContainer} ${styles.articleContainerMedia}`}
          >
            <Image
              src={"/images/services/spda.jpg"}
              width={550}
              height={364}
              alt="spda"
            />
          </div>
        </article>

        <article className={styles.article}>
          <div
            className={`${styles.articleContainer} ${styles.articleContainerMedia}`}
          >
            <Image
              src={"/images/services/intalacao-de-placas-solares.jpg"}
              width={550}
              height={310}
              alt="painel"
            />
          </div>

          <div className={styles.articleContainer}>
            <span className={styles.articleTitle}>
              Instalação de placas solares
            </span>

            <ul className={styles.articleText}>
              <li>Elaboração de projeto</li>
              <li>Readequação de instalações existentes</li>
              <li>Instalação</li>
              <li>Atendemos os setores residenciais e industriais</li>
            </ul>
          </div>
        </article>

        <article className={styles.article}>
          <div className={styles.articleContainer}>
            <span className={styles.articleTitle}>
              Equipe de bombeiros para empresas e eventos
            </span>

            <p className={styles.articleText}>
              Disponibilizamos equipes de Bombeiro civil para empresas, prédios
              e demais estabelecimentos com posto fixo para eventos, shows,
              feiras, bailes de formaturas, estandes de apresentação, festas
              corporativas e casas de show. Nossa equipe de profissionais é
              especializada em serviços de emergência. O serviço prestado pela
              equipe de bombeiros atua no combate e prevenção de incêndios,
              acidentes e no atendimento de primeiros socorros às vítimas de
              casos traumáticos e clínicos.
            </p>
          </div>

          <div
            className={`${styles.articleContainer} ${styles.articleContainerMedia}`}
          >
            <Image
              src={"/images/services/bombeiros.jpg"}
              width={550}
              height={365}
              alt="bombeiros"
            />
          </div>
        </article>

        <article className={styles.article}>
          <div
            className={`${styles.articleContainer} ${styles.articleContainerMedia}`}
          >
            <video
              controls={true}
              autoPlay={false}
              loop={false}
              className={styles.video}
            >
              <source src="/videos/servicos.mp4" />
              Infelizmente seu navegador não suporta este video.
            </video>
          </div>

          <div className={styles.articleContainer}>
            <span className={styles.articleTitle}>
              Venda e instalação de poste dobrável
            </span>

            <p className={styles.articleText}>
              Reduza até 78% os custos de manutenção em postes com este novo
              sistema. O Poste dobrável dispensa a necessidade de plataformas
              elevatórias, escadas, profissionais qualificados para trabalhar em
              altura e reduz radicalmente os riscos com acidentes. O custo de
              manutenção mensal em postes tradicionais pode equivaler a
              instalação de até 7 novos postes dobráveis.
            </p>
          </div>
        </article>

        <ServicesList services={SERVICES} />
      </div>
    </section>
  );
};

export default Services;
