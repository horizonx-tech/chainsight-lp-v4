import ReactDOM from "react-dom/client";
import React from "react";
import './index.css'

export const render = (pageContext) => {
  const { Page } = pageContext;
  ReactDOM.hydrateRoot(
    document.getElementById("page-view"),
    <Page />
  );
}
