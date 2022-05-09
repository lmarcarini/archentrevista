import type { NextPage } from "next";
import CategoriasSection from "../components/CategoriasSection";
import MainBanner from "../components/MainBanner";
import SearchSection from "../components/SearchSection";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      {router.query.filtro && <SearchSection />}
      {!router.query.filtro && (
        <>
          <MainBanner />
          <CategoriasSection />
        </>
      )}
    </div>
  );
};

export default Home;
