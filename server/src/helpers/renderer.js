import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import Routes from '../client/Routes';

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  return `
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="/bundle.min.css">
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
        <script src="vendors~bundle.js"></script>
        <script>
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker
              .register('/worker.js')
              .then(function () {
                console.log('Service worker registered!');
              })
              .catch(function(err) {
                console.log(err);
              });
          }
        </script>
      </body>
    </html>
  `;
};
