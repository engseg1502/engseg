import Image from "next/image";
import { CUSTOMERS } from "data";
import styles from "./Customers.module.css";

const Customers = () => {
  return (
    <section id="clientes" className={styles.customers}>
      <div className="container">
        <span className={styles.title}>Clientes</span>

        <p className={styles.subtitle}>Alguns de nossos clientes</p>

        <div className={styles.gallery}>
          {CUSTOMERS.map((customer, index) => (
            <div key={index} className={styles.image}>
              <Image
                src={`/images/customers/${customer.img}`}
                width={100}
                height={customer.height / 2}
                alt="Imagem do Cliente"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;
