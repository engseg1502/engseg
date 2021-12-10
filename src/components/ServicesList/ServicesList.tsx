import Image from "next/image";
import { List } from "components";
import styles from "./ServicesList.module.css";

interface ServiceItem {
  title: string;
  icon: string;
  list: Array<string>;
}

interface ServicesListProps {
  services: ServiceItem[];
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

          <span className={styles.title}>{service.title}</span>

          <List list={service.list} />
        </div>
      ))}
    </div>
  );
};

export default ServicesList;
