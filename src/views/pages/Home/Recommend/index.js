import React, { Component } from 'react';
import withStyle from '../../../../utils/withStyle';
import styles from './style.css';

class Recommend extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div>推荐列表</div>
        <div>推荐1</div>
        <div>推荐2</div>
      </div>
    )
  }
}

export default withStyle(Recommend, styles);

