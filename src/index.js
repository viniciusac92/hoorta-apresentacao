import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import GlobalStyle from "./styles/GlobalStyle";
import Providers from "./providers/index";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
