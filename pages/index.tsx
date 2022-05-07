import type { NextPage } from "next";
import MainBanner from "../components/MainBanner";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <MainBanner />
    </div>
  );
};

export default Home;
