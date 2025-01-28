import React from "react";
import ReactDOM from "react-dom/client";
import { Authenticator } from '@aws-amplify/ui-react';
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';
import './styles.css';

const components = {
  SignIn: {
    Header() {
      return <h2 style={{padding: '0 32px'}}>Custom Sign-In Header</h2>;
    },
    Footer() {
      return <p>Custom Sign-In Footer</p>;
    },
  },
};

Amplify.configure(outputs);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator components={components}>
      <App />
    </Authenticator>
  </React.StrictMode>
);
