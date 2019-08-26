import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import withStyle from '../../../utils/withStyle';
import styles from './style.css';
import { getDownloadList } from './store/index'

class Download extends Component {
  render() {
    const getList = () => {
      const list = this.props.list;
      return list.map(item => <div key={item.id}>
        <p>{item.title}</p>
        <div>{item.content}</div>
      </div>)
    }
    return (
      <div className={styles.container}>
        <Helmet>
          <meta charset="utf-8"/>
          <title>下载页面</title>
          <meta name="deacription" content="练习react ssr的下载页面"/>
        </Helmet>
        {getList()}
      </div>
    )
  }

  componentDidMount() {
    if(!this.props.list.length) {
      this.props.getDownloadList();
    }
  }
}

const mapStateToProps = state => {
  return {
    list: state.download.downloadList
  }
}

const mapDispatchToProps = dispatch => ({
  getDownloadList(){
    dispatch(getDownloadList());
  }
})

const ExportDownload = connect(mapStateToProps, mapDispatchToProps)(withStyle(Download, styles));
ExportDownload.loadData = (store) => {
  return store.dispatch(getDownloadList());
}
export default ExportDownload;

