"use client";
import { ThemeProvider } from "next-themes";

const ThemeProviderRoot = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default ThemeProviderRoot;
