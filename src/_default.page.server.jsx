import React from "react";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
import { meta } from "./meta";
import { renderToString } from "react-dom/server";

export const render = async (pageContext) => {
  const { Page } = pageContext;

  const viewHtml = renderToString(<Page />);

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${dangerouslySkipEscape(meta())}
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(viewHtml)}</div>
      </body>
    </html>`;
};
