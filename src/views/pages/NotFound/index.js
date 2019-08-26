import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import withStyle from '../../../utils/withStyle';
import styles from './style.css';

class NotFound extends Component {

  constructor(props){
    super(props);
    const { staticContext } = props;
    if(staticContext) {
      props.staticContext.NOT_FOUND = true;
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <Helmet>
          <title>404</title>
          <meta name="description" content="404页面"/>
        </Helmet>
        <p>404, page not found!</p>
      </div>
    )
  }
}

export default withStyle(NotFound, styles);