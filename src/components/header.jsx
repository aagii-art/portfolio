import s from "@/styles/header.module.css";
import { Inter } from "next/font/google";
import { Bebas_Neue } from "next/font/google";

const inter = Inter ({subsets: ["latin"], weight: "variable"});
const bebasneue = Bebas_Neue ({subsets: ["latin"], weight: "400"});

export const Header = ({ name }) => {
  return (
    <div className={s.header}>

      <p className={`${s.name} ${bebasneue.className}`}>{name}</p>

      <div className={`${s.work} ${inter.className}`}>
        <p>Work</p>
        <p>About</p>
        <p>Contact</p>
      </div>

    </div>
  );
};
