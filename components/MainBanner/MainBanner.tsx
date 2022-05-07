import Image from "next/image";
import { useEffect, useState } from "react";
import bannerImageDesktop from "../../public/images/banner/banner-desktop.jpg";
import bannerImageMobile from "../../public/images/banner/banner-mobile.jpg";
import styles from "./MainBanner.module.css";

type Props = {};

const MainBanner: React.FC = ({}: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setIsMobile(isMobile);
    console.log(isMobile);
  }, []);

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.imageDesktop}>
        <Image
          src={bannerImageDesktop}
          alt="banner"
          layout={isMobile ? "intrinsic" : "fixed"}
          height={450}
          width={1920}
          placeholder="blur"
        />
      </div>
      <div className={styles.imageMobile}>
        <Image
          src={bannerImageMobile}
          alt="banner"
          layout="intrinsic"
          height={454}
          width={545}
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default MainBanner;
