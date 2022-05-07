import { useEffect, useState } from "react";

function useDarkTheme() {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.setAttribute("dark-theme", "true");
      localStorage.setItem("darkTheme", "true");
    } else {
      document.documentElement.setAttribute("dark-theme", "false");
      localStorage.setItem("darkTheme", "false");
    }
  }, [darkTheme]);

  useEffect(() => {
    const darkTheme = localStorage.getItem("darkTheme");
    if (darkTheme) {
      setDarkTheme(JSON.parse(darkTheme));
    }
  }, []);

  return { darkTheme, setDarkTheme };
}

export default useDarkTheme;
