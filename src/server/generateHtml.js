import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';

export const render = (store, routes, req, context) => {
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>
          {
            renderRoutes(routes)
          }
        </div>
      </StaticRouter>
    </Provider>
  ));

  const styleStr = context.css.length ? context.css.join('\n') : '';
  const helmet = Helmet.renderStatic();

  return `
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <style>${styleStr}</style>
      </head>
      <body style="margin: 0px;padding: 0px;">
        <div id="root">${content}</div>
        <script>
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
        </script>
        <script src="index.js"></script>
      </body>
    </html>
  `;
}