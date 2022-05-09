import SearchSection from "../components/SearchSection";
import styles from "../styles/Category.module.css";

type Props = {};

const Busca = (props: Props) => {
  return (
    <div className={styles.main}>
      <SearchSection />
    </div>
  );
};

export default Busca;
