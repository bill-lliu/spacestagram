import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import '@shopify/polaris/build/esm/styles.css';
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";
<link
  rel="stylesheet"
  href="https://unpkg.com/@shopify/polaris@7.0.0-rc.1/build/esm/styles.css"
/>;

// ReactDOM.render(
//   <AppProvider i18n={enTranslations}>
//     <Page title="Example app">
//       <Card sectioned>
//         <Button onClick={() => alert('Button clicked!')}>Example button</Button>
//       </Card>
//     </Page>
//   </AppProvider>,
//   document.querySelector('#app'),
// );

ReactDOM.render(
  <AppProvider i18n={enTranslations}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
