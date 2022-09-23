import * as React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components"
import { theme } from "../styles/theme"
import { GlobalStyle } from "../styles/globalStyles"
import { Header } from "./Header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    <Header />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </ThemeProvider>
  )
}

export default Layout
