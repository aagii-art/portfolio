import style from "@/styles/header.module.css";

export const Header = ({ name }) => {
  return (
    <div className={style.header}>
      <p className={style.name}>{name}</p>
      <p className={style.work}>Work</p>
      <p>About</p>
      <p>Contact</p>
    </div>
  );
};
