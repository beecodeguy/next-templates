import styles from "app/page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/sidebar">Sidebar</Link>
    </main>
  );
}
