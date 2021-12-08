import Image from "next/image";

import styles from "./Services.module.css";

const Services = () => {
  return (
    <section id="serviços">
      <div className="container">
        <span className={styles.title}>Serviços</span>
        <p className={styles.text}>
          Abaixo você confere os serviços que a Eng.Seg. pode oferecer para sua
          empresa.
        </p>

        <article className={styles.content}>
          <div>
            <span className={styles.articleTitle}>
              SPDA - Sistema de proteção contra descargas atmosféricas
            </span>
            <ul className={styles.listText}>
              <li>Elaboração de projeto para SPDA</li>
              <li>Readequação de estrutura para SPDA</li>
              <li>Emissão de laudo (projeto ou readequação)</li>
              <li>Instalação</li>
              <li>Atendemos os setores residenciais e industriais</li>
            </ul>
          </div>
          <div>
            <Image
              src={"/images/spda.jpeg"}
              width={275}
              height={275}
              alt="spda"
              className={styles.imageRounded}
            />
          </div>
        </article>

        <article className={styles.content}>
          <div>
            <Image
              src={"/images/painel.png"}
              width={275}
              height={275}
              alt="painel"
              className={styles.imageRounded}
            />
          </div>
          <div>
            <span className={styles.articleTitle}>
              Instalação de placas solares
            </span>
            <ul className={styles.listText}>
              <li>Elaboração de projeto</li>
              <li>Readequação de instalações existentes</li>
              <li>Instalação</li>
              <li>Atendemos os setores residenciais e industriais</li>
            </ul>
          </div>
        </article>

        <article className={styles.content}>
          <div className={styles.contentSpecial}>
            <span className={styles.articleTitle}>
              Equipe de bombeiros para empresas e eventos
            </span>
            <p className={styles.textContent}>
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
          <div>
            <Image
              src={"/images/bomb.png"}
              width={275}
              height={275}
              alt="bombeiros"
              className={styles.imageRounded}
            />
          </div>
        </article>

        <article className={styles.content}>
          <div>
            {/* <Image
              src={"/images/bomb.png"}
              width={275}
              height={275}
              alt="bombeiros"
              className={styles.imageRounded}
            /> */}
          </div>
          <div className={styles.contentSpecial}>
            <span className={styles.articleTitle}>
              Venda e instalação de poste dobrável
            </span>
            <p className={styles.textContent}>
              Reduza até 78% os custos de manutenção em postes com este novo
              sistema. O Poste dobrável dispensa a necessidade de plataformas
              elevatórias, escadas, profissionais qualificados para trabalhar em
              altura e reduz radicalmente os riscos com acidentes. O custo de
              manutenção mensal em postes tradicionais pode equivaler a
              instalação de até 7 novos postes dobráveis. Solicite um orçamento.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
