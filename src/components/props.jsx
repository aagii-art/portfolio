import s from "@/styles/props.module.css";
import { PropsiinZurag } from "./propsiinZurag";
import { PropsText } from "./propsiinText";

export const Props = () => {
  return (
    <div className={s.props}>
      <PropsiinZurag />
      <PropsText />
    </div>
  );
};
