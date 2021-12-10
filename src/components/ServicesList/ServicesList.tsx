import Image from "next/image";
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

          <ul className={styles.list}>
            {service.list.map((item, index) => (
              <li key={index}>
                <div>
                  <Image
                    src="/svgs/checked.svg"
                    alt='Checked'
                    width={18}
                    height={18}
                  />
                </div>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;
