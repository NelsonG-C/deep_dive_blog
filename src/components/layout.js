import React from "react"
import { Link } from "gatsby"
import logo from "./wave.jpg"

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <img src={logo} alt="Hello" width="100px" />
        <h1>Deep Dive</h1>
        <h3>Exploring the unknown</h3>
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
