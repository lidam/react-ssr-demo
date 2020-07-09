import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ListInfo from './List/index';
import Recomment from './Recommend/index';
import withStyle from '../../../utils/withStyle';
import styles from './style.css';

class Home extends Component {
  render() {
    return (
        <div className={styles.container}>
        <Helmet>
          <meta charset="utf-8"/>
          <title>首页11111</title>
          <meta name="deacription" content="练习react ssr的首页"/>
        </Helmet>
        <ListInfo staticContext={this.props.staticContext}></ListInfo>
        <Recomment staticContext={this.props.staticContext}></Recomment>
      </div>
    )
  }
}

const ExportHome = withStyle(Home, styles);
ExportHome.loadData = (store) => {
  return ListInfo.loadData(store);
}

export default ExportHome;

