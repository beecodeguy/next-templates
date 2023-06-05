import styles from "app/page.module.css";
import ThemeSwitch from "components/common/ThemeSwitch/ThemeSwitch";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="text-center text-3xl underline">All the pages here</h1>
      <ThemeSwitch />
    </main>
  );
}
