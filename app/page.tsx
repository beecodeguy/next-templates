import styles from "app/page.module.css";
import ThemeSwitch from "components/common/ThemeSwitch/ThemeSwitch";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const checkMe =
    "lorem lorem orem lorem orem lorem orem lorem orem lorem orem lorem orem lorem orem lorem orem lorem orem lorem orem lorem orem lorem orem lorem orem loremorem loremorem loremorem loremorem loremorem loremorem loremorem loremorem loremorem loremorem lorem";

  console.log(checkMe);
  return (
    <main className={styles.main}>
      <h1 className="text-center text-3xl underline">All the pages here</h1>
      <ThemeSwitch />
    </main>
  );
}
