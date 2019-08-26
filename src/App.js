import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './views/components/Header/index';
import Footer from './views/components/Footer/index';

const App = (props) => {
  return (<div>
    <Header staticContext={props.staticContext}/>
    {
      renderRoutes(props.route.routes)
    }
    <Footer staticContext={props.staticContext}/>
  </div>)
}

export default App;
