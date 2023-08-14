import React, { Fragment } from "react";
import SushiImage from "../../assets/sushi.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Япона Кухня</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={SushiImage} alt="logo" />
      </div>
    </Fragment>
  );
};

export default Header;
