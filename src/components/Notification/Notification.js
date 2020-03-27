import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import styles from "./Notification.module.css";

const Notification = ({ children, show, timeout = 250, remove }) => (
  <CSSTransition
    in={show}
    timeout={timeout}
    classNames={styles}
    onEntered={() => setTimeout(remove, 1000)}
    unmountOnExit
  >
    <div className={styles.container}>
      {show}
      {children}
    </div>
  </CSSTransition>
);

Notification.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool,
  timeout: PropTypes.number,
  remove: PropTypes.func.isRequired
};

export default Notification;
