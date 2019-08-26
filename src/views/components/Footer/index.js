import React, { Component } from 'react';
import withStyle from '../../../utils/withStyle';
import styles from './style.css';

class Footer extends Component {
  render() {
    return (
      <div className={styles.container}>footer</div>
    )
  }
}

export default withStyle(Footer, styles);