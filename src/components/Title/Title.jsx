import React from "react";
import * as styles from "./styles.module.css";

const Title = () => {
  const list = [
    "День Защитника Отечества!",
    "Сувениры для настоящих мужчин",
    "Подарки для родных и близких",
    "Для коллег по работе",
]

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.wrapperTitle}>{"23 ФЕВРАЛЯ"}</h1>
      {list.map((i) => <h2 className={styles.wrapperTag} key={i}>/ {String(i).toUpperCase()}</h2>)}
    </div>
  );
};

export default Title;
