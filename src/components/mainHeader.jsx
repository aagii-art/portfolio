import s from "@/styles/main.module.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], weight: "variable" });

export const MainHeader = () => {
  return (
    <div className={s.mainHeader}>
      <p className={s.mainHeaderiinHeader}>FEATURED PROJECTS</p>
      <p className={`${s.mainHeaderiinP} ${manrope.className}`}>
        Here are some of the selected projects that showcase my passion for
        front-end development.
      </p>
    </div>
  );
};
