import { cache } from "@emotion/css";
import createEmotionServer from "@emotion/server/create-instance";
import NextDocument, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import * as React from "react";
import { Fragment } from "react";

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const page = await ctx.renderPage();
    const { css, ids } = await renderStatic(page.html);
    const initialProps = await NextDocument.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <Fragment>
          {initialProps.styles}
          <style
            data-emotion={`css ${ids.join(" ")}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        </Fragment>
      )
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Work+Sans:wght@400;600&display=swap"
            rel="stylesheet"/>
          <noscript>
            <link
              href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Work+Sans:wght@400;600&display=swap"
              rel="stylesheet"/>
          </noscript>

          <title>Pavel Vondrášek, programátor, tvůrce a konzultant</title>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}

export default Document;

const renderStatic = async (html: string) => {
  if (html === undefined) {
    throw new Error("did you forget to return html from renderToString?");
  }
  const { extractCritical } = createEmotionServer(cache);
  const { ids, css } = extractCritical(html);

  return { html, ids, css };
};
