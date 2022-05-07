import Image from "next/image";
import Link from "next/link";
import SearchBar from "../SearchBar";
import styles from "./TopMenu.module.css";
import { MdOutlineDarkMode, MdShoppingCart, MdMenu } from "react-icons/md";
import useBreakPoint from "../../hooks/useBreakPoint";
import DarkModeButton from "../DarkModeButton";
import { useState } from "react";

type Props = {};

const TopMenu: React.FC = ({}: Props) => {
  const [expanded, setExpanded] = useState(false);
  const { hitBreakPoint } = useBreakPoint({ width: 600 });

  return (
    <>
      <div className={styles.decorativeLine}></div>
      <div className={styles.topMenuContainer}>
        {hitBreakPoint && (
          <>
            <Link href="/">
              <a title="logo">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width="100"
                  height="44"
                />
              </a>
            </Link>
            <div className={styles.inlineSearchContainer}>
              <SearchBar />
            </div>
          </>
        )}
        {!hitBreakPoint && (
          <button
            type="button"
            title="Menu"
            className={styles.iconButton}
            onClick={(e) => setExpanded((current) => !current)}
          >
            <MdMenu>Menu</MdMenu>
          </button>
        )}
        <div className={styles.iconsContainer}>
          <DarkModeButton />
          <button
            type="button"
            title="Carrinho de Compras"
            className={styles.iconButton}
          >
            <MdShoppingCart>Carrinho de Compras</MdShoppingCart>
          </button>
        </div>
      </div>
      {expanded && (
        <div className={styles.dropdownMenu}>
          <Link href="/">Início</Link>
        </div>
      )}
      {!hitBreakPoint && <SearchBar />}
    </>
  );
};

export default TopMenu;
