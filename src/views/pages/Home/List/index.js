import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import withStyle from '../../../../utils/withStyle';
import styles from './style.css';
import { getHomeList } from './store/index'

class ListInfo extends Component {
  render() {
    const getList = () => {
      const list = this.props.list;
      return list.map(item => <li className={styles.item} key={item.id}>
        <div className={styles.item_title}>{item.title}</div>
        <div className={styles.item_content}>{item.content}</div>
      </li>);
    }
    return (
      <div className={styles.container}>
        <ul>
          { getList() }
        </ul>
      </div>
    )
  }

  componentDidMount() {
    if(!this.props.list.length) {
      this.props.getHomeList();
    }
  }
}

const mapStateToProps = state => ({
  list: state.home.homeList
});

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList());
  }
})

const ExportList = connect(mapStateToProps, mapDispatchToProps)(withStyle(ListInfo, styles));
ExportList.loadData = (store) => {
  return store.dispatch(getHomeList());
}

export default ExportList;

