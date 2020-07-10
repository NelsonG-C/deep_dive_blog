import React from "react"
import { Link } from "gatsby"
import logo from "./wave.png"
import comp from "../images/computer.png"
import brain from "../images/brain.png"
import petriDish from "../images/petriDish.png"
import styles from "./layout.module.css"

const HeaderTabs = props => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children, location }) {
  return (
    <div>
      <header>
        <div
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            width: "100%",
          }}
        >
          <div className={styles.heading}>
            <img src={logo} alt="Hello" className={styles.logo} />
            <div className={styles.pageTitle}>
              <Link to="/">
                <h1 className={styles.title}>Deep Dive</h1>
              </Link>
              <p className={styles.subtitle}>
                Exploring the unknown knowledge areas
              </p>
            </div>
          </div>
          <ul
            style={{
              float: "right",
              display: "inline-block",
              marginRight: "4rem",
              marginTop: "1rem",
              marginBottom: 0,
            }}
          >
            <div style={{ display: "inline-block" }}>
              <img
                src={comp}
                alt=""
                width="50px"
                style={{
                  display: "block",
                  alignItems: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: 0,
                }}
              />
              <HeaderTabs to="/programming/">Programming</HeaderTabs>
            </div>
            <div style={{ display: "inline-block" }}>
              <img
                src={petriDish}
                alt=""
                width="50px"
                style={{
                  display: "block",
                  alignItems: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: 0,
                }}
              />
              <HeaderTabs to="/altmeat/">Alt Meat</HeaderTabs>
            </div>
            <div style={{ display: "inline-block" }}>
              <img
                src={brain}
                alt=""
                width="50px"
                style={{
                  display: "block",
                  alignItems: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: 0,
                }}
              />
              <HeaderTabs to="/neuroscience/">Neuroscience</HeaderTabs>
            </div>
            <div style={{ display: "inline-block" }}>
              <img
                src={brain}
                alt=""
                width="50px"
                style={{
                  display: "block",
                  alignItems: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: 0,
                }}
              />
              <HeaderTabs to="/psychology/">Psychology</HeaderTabs>
            </div>
          </ul>
        </div>
      </header>
      <div>{children}</div>
      <footer className={styles.footer}>
        <div>
          <Link>
            <a href="https://github.com/NelsonG-C">Github</a>
          </Link>
        </div>
        <div>
          <p>Site developed by Nelson Gardner-Challis</p>
          <p>Made in Gatsby.js</p>
        </div>
      </footer>
    </div>
  )
}
