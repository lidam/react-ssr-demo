import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import { getServerStore } from '../views/store/index';
import { render } from './generateHtml';
import routes from '../Routes';

let app = express();
app.use(express.static('public'));
app.use('/api', proxy('http://apidev.xin.com', {
  proxyReqPathResolver: function(req) {
    return '/mock/5d637b4e04e2fb0008f9ac33' + req.url;
  }
}));

app.get('*', function(req, res) {
  const store = getServerStore(req);
  const matchedRoutes = matchRoutes(routes, req.path);
  const promises = [];
  matchedRoutes.forEach(item => {
    if(item.route.loadData){
      const promise = new Promise((resolve) => {
        item.route.loadData(store).then(resolve).catch(resolve);
      })
      promises.push(promise);
    }
  })
  Promise.all(promises).then(() => {
    const context = {
      css: []
    }
    const html = render(store, routes, req, context);
    if(context.action === 'REPLACE') {
      res.status(301, context.url);
      res.send(html);
    } else if(context.NOT_FOUND){
      res.status(404);
      res.send(html);
    } else {
      res.send(html);
    }
  })
});

app.listen(3000);
