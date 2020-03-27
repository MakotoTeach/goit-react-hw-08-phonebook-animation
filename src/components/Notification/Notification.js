import React, {Component} from 'react';
import styles from './Notification.module.css'

export default class Notification extends Component {
  componentDidMount() {
  setTimeout(this.props.remove, 1000)
  }
  render() {
    return (
      <div className={styles.container}>
        <p>Contact already exist!</p>
      </div>
    )
  }
}