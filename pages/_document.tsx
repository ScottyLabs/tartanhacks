import { ServerStyleSheets } from "@mui/styles"
import Document, { Head, Html, Main, NextScript } from "next/document"
import React, { ReactElement } from "react"
import { theme } from "src/themes/theme"

class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html>
        <Head>
          <meta charSet={"utf-8"} />
          <meta name="description" content="TartanHacks" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta property="og:title" content="TartanHacks" />
          <meta property="og:type" content="website" />
          <meta
            property={"og:url"}
            content={"https://tartanhacks.com"}
          />
          <meta
            property="og:description"
            content="TartanHacks"
          />
          {/* <meta
            property={'og:image'} content={''}
          /> */}
          <link rel={"icon"} type={"image/x-icon"} href={"/favicon.ico"} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// eslint-disable-next-line
MyDocument.getInitialProps = async (ctx): Promise<any> => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  // eslint-disable-next-line
  ctx.renderPage = (): any =>
    originalRenderPage({
      // eslint-disable-next-line
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
    })

  const isProduction = process.env.NODE_ENV === "production"
  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    isProduction,
    styles: (
      <>
        {initialProps.styles}
        {sheets.getStyleElement()}
      </>
    )
  }
}

export default MyDocument
