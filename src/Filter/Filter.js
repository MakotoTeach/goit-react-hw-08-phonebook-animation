import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

function Filter({ value, onChangeFilter }) {
  return (
    <div>
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

export default Filter;
