import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Banner } from "components";
import styles from "./Banners.module.css";

const Banners = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 992, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true}
      deviceType="desktop"
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={6000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass={styles.carouselContainer}
      dotListClass={styles.carouselDots}
      removeArrowOnDeviceType={["mobile"]}
    >
      <div className={styles.carouselItem}>
        <Banner
          img={{
            src: "/images/banner/nrs.jpg",
            alt: "Homem descendo em um buraco",
          }}
          content={{
            title: "NRs",
            description:
              "Estes treinamentos tem como objetivo capacitar, atualizar e certificar profissionais autorizados, para desempenhar atividades em conformidade com cada norma.",
          }}
        />
      </div>

      <div className={styles.carouselItem}>
        <Banner
          img={{
            src: "/images/banner/brigada.jpg",
            alt: "Mulher apagando fogo",
          }}
          content={{
            title: "Formação de Brigada",
            description:
              "O curso de brigada de incêndio, visa fornecer informações teóricas e práticas, para formação de pessoas na prevenção e combate a incêndios e primeiros socorros.",
          }}
        />
      </div>

      <div className={styles.carouselItem}>
        <Banner
          img={{
            src: "/images/banner/treinamentos.jpg",
            alt: "Professor dando aula",
          }}
          content={{
            title: "Treinamentos",
            description:
              "Manter a equipe de trabalho engajada e com alto índice de produtividade é um sonho para todo gestor. Independentemente do tamanho da empresa, o treinamento é fundamental para se alcançar um nível mais satisfatório de excelência e segurança.",
          }}
        />
      </div>
    </Carousel>
  );
};

export default Banners;
