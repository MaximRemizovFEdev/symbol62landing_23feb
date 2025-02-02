import * as React from "react";
import Header from "../components/Header/Header";
import Title from "../components/Title/Title";
import BGCircle from "../components/BGCircle/BGCircle";
import VideoBackgroundMain from "../components/VideoBackgroundMain/VideoBackgroundMain";
import Products from "../components/Products";
import ContactBlock from "../components/ContactBlock/ContactBlock";

import * as styles from "./common.module.css";

import "./customCommon.css";

const IndexPage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Title />
        <div className={styles.background}>
          <div className={styles.backgroundLayer}></div>
          <VideoBackgroundMain />
        </div>
      </main>
      <div style={{ position: "relative" }}>
        <BGCircle numberOfCircles={5} speed={3} diameter={250} />
        <Products />
      </div>
      <footer id="contact" style={{ position: "relative" }}>
        <BGCircle numberOfCircles={2} speed={3} diameter={150} />
        <ContactBlock />
      </footer>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Символика - подарки на 23 февраля</title>;
