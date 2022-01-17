import { VFC } from "react";

import styles from "@/styles/Home.module.css";

import { Footer } from "./Footer";

export const HomeLayout: VFC = (page) => {
  return (
    <div>
      <main className={styles.main}>{page}</main>
      <Footer />
    </div>
  );
};
