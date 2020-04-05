import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

export function Filter({ value, onChangeFilter }) {
  return (
    <div className={styles.container}>
      <label className={styles.filterLabel}>
        Find contact by name
        <input
          className={styles.filterInput}
          type="text"
          value={value}
          onChange={e => onChangeFilter(e.target.value)}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
};

