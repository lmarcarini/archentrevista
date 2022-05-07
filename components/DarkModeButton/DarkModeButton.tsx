import React from "react";
import { MdDarkMode } from "react-icons/md";
import useDarkTheme from "../../hooks/useDarkTheme";
import styles from "./DarkModeButton.module.css";

type Props = {};

const DarkModeButton: React.FC = ({}: Props) => {
  const { darkTheme, setDarkTheme } = useDarkTheme();

  return (
    <button
      type="button"
      title="Tema Escuro"
      className={styles.iconButton}
      onClick={(e) => setDarkTheme((currentTheme) => !currentTheme)}
    >
      <MdDarkMode>Tema Escuro</MdDarkMode>
    </button>
  );
};

export default DarkModeButton;
