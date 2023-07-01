import styles from "app/page.module.css";
import { Input } from "shad/components/ui/input";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="text-center text-3xl underline">All the pages here</h1>
      <Input placeholder="from shadcn/ui (Type here...)" />
    </main>
  );
}
