// render the react app and return the string

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "../client/Routets";

export default (req, store) => {
  /*
  note: we are sending HTML code and not JS like in normal react apps
  so we need to hydrate  and have sencond client bundle
  */
  // static router must be given the  current url
  // note: when a particular page(component) is being rendered server side the life cycle of
  // that component doesnt execute as we are fetching only the html
  // only when we send the client js bundle then only the component we
  // execute like a normal react app,  we can test it by removing the client bundle script
  // we need to use additional settings to make this behaviour in the server side
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  );

  /*
    add html script tp inject the client bundle js into the html content above
  */
  const html = `
  <html>
    <head>
    </head>
    <body>
      <div id="root">${content}</div>
       <script src="bundle.js"></script>
    </body>  

  </html>
  `;

  return html;
};
