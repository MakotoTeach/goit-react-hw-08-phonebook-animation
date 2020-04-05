import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={styles}
          unmountOnExit
        >
          <h1 className={styles.headline}>Phonebook</h1>
        </CSSTransition>
        {children}
      </div>
    </div>
  );
};

