import React from "react";
import App from "./App";
import { CookiesProvider } from "react-cookie";

export default function Root() {
  return (
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <App />
    </CookiesProvider>
  );
}
