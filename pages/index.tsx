import type { NextPage } from "next";
import CategoriasSection from "../components/CategoriasSection";
import MainBanner from "../components/MainBanner";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <MainBanner />
      <CategoriasSection />
    </div>
  );
};

export default Home;
