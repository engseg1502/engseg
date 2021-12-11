import Image from "next/image";
import { List } from "components";
import { ServiceInterface } from "interfaces";
import styles from "./ServicesList.module.css";

interface ServicesListProps {
  services: ServiceInterface[];
}

const ServicesList = ({ services }: ServicesListProps) => {
  return (
    <div className={styles.services}>
      {services.map((service, index) => (
        <div className={styles.service} key={index}>
          <div className={styles.icon}>
            <Image
              src={`/svgs/${service.icon}`}
              alt={service.title}
              width={70}
              height={70}
            />
          </div>

          <h4 className={styles.title}>{service.title}</h4>

          <List list={service.list} />
        </div>
      ))}
    </div>
  );
};

export default ServicesList;
