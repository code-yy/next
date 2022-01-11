import { VFC } from "react";
import { Footer } from "./Footer";
import styles from "@/styles/Home.module.css";

export const AboutLayout: VFC = (page) => {
  return (
    <div>
      <main className={styles.main}>{page}</main>
      <Footer />
    </div>
  );
};
