import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withStyle from '../../../utils/withStyle';
import styles from './style.css';

class Header extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header_section}>
          <Link to="/" className={styles.left}>简书</Link>
          <div className={styles.center}>
            <Link to="/" className={styles.left}>首页</Link>
            <Link to="/download" className={styles.left}>下载App</Link>
          </div>
          <div className={styles.right}>
            <Link to="/login" className={styles.right_item}>登陆</Link>
            <Link to="/register" className={styles.right_item}>注册</Link>
            <Link to="/write" className={styles.right_item}>写文章</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyle(Header, styles);