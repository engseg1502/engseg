import Image from "next/image";
import styles from "./List.module.css";

interface ListProps {
  list: Array<string>;
  customStyleContainer?: string;
  customStyleItem?: string;
  customStyleIcon?: string;
  customStyleText?: string;
}

const List = ({
  list,
  customStyleContainer,
  customStyleItem,
  customStyleIcon,
  customStyleText,
}: ListProps) => {
  return (
    <ul className={`${styles.list} ${customStyleContainer}`}>
      {list.map((item, index) => (
        <li key={index} className={`${customStyleItem}`}>
          <div className={`${customStyleIcon}`}>
            <Image
              src="/svgs/checked.svg"
              alt="Checked"
              width={18}
              height={18}
            />
          </div>

          <span className={`${customStyleText}`}>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
