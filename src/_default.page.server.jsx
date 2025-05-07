import React from "react";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
import { meta } from "./meta";
import { renderToPipeableStream } from "react-dom/server";

export const render = async (pageContext) => {
  const { Page } = pageContext;

  const streamChunks = [];
  const streamPromise = new Promise((resolve, reject) => {
    const stream = renderToPipeableStream(<Page />, {
      onShellReady() {
        resolve(stream);
      },
      onShellError(error) {
        reject(error);
      },
      onError(error) {
        console.error("SSR error:", error);
      }
    });
  });

  const stream = await streamPromise;
  const { Writable } = await import("node:stream");
  const { Buffer } = await import("node:buffer");

  await new Promise((resolve) => {
    stream.pipe(
      new Writable({
        write(chunk, encoding, callback) {
          streamChunks.push(chunk);
          callback();
        },
        final(callback) {
          resolve();
          callback();
        }
      })
    );
  });

  const viewHtml = Buffer.concat(streamChunks).toString();

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
