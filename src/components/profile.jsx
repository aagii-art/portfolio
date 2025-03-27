import s from "@/styles/profile.module.css";
import { Manrope } from "next/font/google";
import { Bebas_Neue } from "next/font/google";

const bebasneue = Bebas_Neue({subsets : ["latin"], weight: "400" });
const manrope = Manrope({subsets: ["latin"], weight: ["400", "700"]});

export const Profile = ({name}) => {
  return (
    <div className={s.profile}>
        <div className={s.text} >
          <div>
            <p className={`${s.header} ${bebasneue.className}`}>
                HI, I AM {name}.
            </p>

            <p className={`${s.texts} ${manrope.className}`}> A Sydney based front-end developer passionate about
              building accessible and user friendly websites.
            </p>

            <div className={s.link}>
                <img src="/img/button.png" alt="" />
                <img src="/img/Frame 3.png" alt="" />
                <img src="/img/Frame 4.png" alt="" />
            </div>

         </div>
        </div>

        <div className={s.zurag} >
            <img src="/img/man.png" alt="" />
        </div>
    </div>
  )
}
