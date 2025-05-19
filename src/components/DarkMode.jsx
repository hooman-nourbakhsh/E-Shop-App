import { useEffect, useState } from "react";
import LightButton from "../assets/website/light-mode-button.png";
import DarkButton from "../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.theme || "light");

  useEffect(() => {
    localStorage.theme = theme;
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative"
    >
      <img
        src={LightButton}
        alt="LightButton"
        className={`absolute right-0 z-10 w-12 cursor-pointer transition-all duration-300 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
      />
      <img src={DarkButton} alt="DarkButton" className="w-12 cursor-pointer" />
    </div>
  );
};

export default DarkMode;
