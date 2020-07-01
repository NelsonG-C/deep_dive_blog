import React from "react"
import { Link } from "gatsby"
import logo from "./wave.jpg"

const HeaderTabs = props => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 900 }}>
      <header>
        <img
          src={logo}
          alt="Hello"
          width="100px"
          style={{ marginRight: "0.5rem", display: "inline" }}
        />
        <Link to="/">
          <h1 style={{ display: "inline" }}>Deep Dive</h1>
        </Link>

        <ul style={{ float: "right" }}>
          <HeaderTabs to="/programming">Programming</HeaderTabs>
          <HeaderTabs to="/altmeat">Alt Meat</HeaderTabs>
          <HeaderTabs to="/neuroscience">Neuroscience</HeaderTabs>
          <HeaderTabs to="/psychology">Psychology</HeaderTabs>
        </ul>
      </header>
      {children}
      <footer>
        <Link>
          <a href="https://github.com/NelsonG-C">Github</a>
        </Link>
      </footer>
    </div>
  )
}
