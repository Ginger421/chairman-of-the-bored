import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Apollo Client Setup
import client from "./apolloClient";
import { ApolloProvider } from "@apollo/react-hooks";
import { AuthProvider } from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  </AuthProvider>
);
