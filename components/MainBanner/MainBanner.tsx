import Image from "next/image";
import { useEffect, useState } from "react";
import bannerImageDesktop from "../../public/images/banner/banner-desktop.jpg";
import bannerImageMobile from "../../public/images/banner/banner-mobile.jpg";
import styles from "./MainBanner.module.css";

type Props = {};

const MainBanner: React.FC = ({}: Props) => {
  //Ajusta o tamanho para ficar um pouco maior em relação a tela
  const MAX_WIDTH = 1920;
  const MAX_HEIGHT = 450;
  const [size, setSize] = useState({ height: MAX_HEIGHT, width: MAX_WIDTH });

  useEffect(() => {
    let width = Math.min(window.innerWidth + 600, MAX_WIDTH);
    let height = (width / size.width) * size.height;
    setSize({
      height: height,
      width: width,
    });
  }, [size.height, size.width]);

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.imageDesktop}>
        <Image
          src={bannerImageDesktop}
          alt="banner"
          layout="fixed"
          height={size.height}
          width={size.width}
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
