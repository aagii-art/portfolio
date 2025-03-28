import s from "@/styles/main.module.css";
import { Bebas_Neue } from "next/font/google";
import { Manrope } from "next/font/google";
import { MainHeader } from "./mainHeader";
import { Props } from "./props";

const bebasneue = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const manrope = Manrope({ subsets: ["latin"], weight: "variable" });

export const Main = () => {
  return (
    <div className={`${s.main} ${bebasneue.className} `}>
      <MainHeader />

      <Props />
    </div>
  );
};
