import Home from './views/pages/Home/index';
import Download from './views/pages/Download/index';
import NotFound from './views/pages/NotFound/index';
import App from './App.js';

export default [{
  path: '/',
  component: App,
  routes: [
    {
      path: '/',
      exact: true,
      component: Home,
      loadData: Home.loadData,
      key: 'home'
    },
    {
      path: '/download',
      exact: true,
      component: Download,
      loadData: Download.loadData,
      key: 'download'
    },
    {
      component: NotFound,
      key: 'notFound'
    }
  ]
}]