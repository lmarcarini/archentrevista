import type { NextPage } from "next";
import MainBanner from "../components/MainBanner";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <MainBanner />
    </div>
  );
};

export default Home;
