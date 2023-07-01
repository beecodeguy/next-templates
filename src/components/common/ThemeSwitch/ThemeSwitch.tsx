"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiMoon, HiOutlineLightBulb } from "react-icons/hi";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleThemeSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex-column">
      <button className="rounded" onClick={handleThemeSwitch}>
        <span className="icon-container-24 flex flex-col items-center justify-center min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px]">
          {theme === "light" ? <HiOutlineLightBulb /> : <HiMoon />}
        </span>
      </button>
    </div>
  );
};

export default ThemeSwitch;
