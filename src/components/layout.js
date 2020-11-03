import React from "react"
import { Link } from "gatsby"
import logo from "./wave.png"
import comp from "../images/computer.png"
import brain from "../images/brain.png"
import petriDish from "../images/petriDish.png"
import note from "../images/note.png"
import styles from "./layout.module.css"

//icons
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const HeaderTabs = props => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children, location }) {
  return (
    <div>
      <header>
        <div className={`${styles.container} ${styles.headerOverlay}`}>
          <div className={styles.row}>
            <div className={`${styles.headerWidth} ${styles.colAuto}`}>
              <div className={styles.heading}>
                <div>
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
              </div>
            </div>
            <div className={`${styles.colAuto} ${styles.headerIcons}`}>
              <div className={styles.headerMenu}>
                <div className={`${styles.headerItem} ${styles.colHeader}`}>
                  <img src={comp} alt="" className={styles.headerIcons} />
                  <HeaderTabs to="/programming/">Programming</HeaderTabs>
                </div>
                <div className={`${styles.headerItem} ${styles.colHeader}`}>
                  <img src={petriDish} alt="" className={styles.headerIcons} />
                  <HeaderTabs to="/altmeat/">Alt Meat</HeaderTabs>
                </div>
                <div className={`${styles.headerItem} ${styles.colHeader}`}>
                  <img src={brain} alt="" className={styles.headerIcons} />
                  <HeaderTabs to="/neuroscience/">Neuroscience</HeaderTabs>
                </div>
                <div className={`${styles.headerItem} ${styles.colHeader}`}>
                  <img src={note} alt="" className={styles.headerIcons} />
                  <HeaderTabs to="/entrepreneur/">Entrepreneurship</HeaderTabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.mainContent}>{children}</div>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div>
            <nav className={styles.footerNav}>
              <HeaderTabs to="/">Home</HeaderTabs>
              <HeaderTabs to="/programming/">Programming</HeaderTabs>
              <HeaderTabs to="/altmeat/">Alt Meat</HeaderTabs>
              <HeaderTabs to="/neuroscience/">Neuroscience</HeaderTabs>
              <HeaderTabs to="/entrepreneur/">Entrepreneurship</HeaderTabs>
            </nav>
          </div>
          <div className={styles.footerText}>
            <p>© 2020 Nelson Gardner-Challis. All Rights Reserved.</p>
          </div>
          <div className={styles.socialIcons}>
            <a href="https://github.com/NelsonG-C">
              <FaGithub />
            </a>
            <a href="mailto:nelsongc59@gmail.com">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/nelsongc/">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
