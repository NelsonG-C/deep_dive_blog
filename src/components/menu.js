import React from "react"
import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"

//menu component
//for each end slug present under this parent slug
//create a link in the menu
export default function SideMenu({ location }) {
  console.log(location)
  //need a foreach mapping here or something similar to make the
  //post amounts dynamic
  const splitPath = location.pathname.split("/")
  const slug = splitPath[1]
  console.log("Split Path", splitPath)
  console.log("this is slug", slug)
  return (
    <Menu styles={styles} right>
      <Link className="menu-item" to={`/${slug}`}>
        Introduction
      </Link>
      {getMenuLinks(slug)}
      <Link className="menu-item" to={`/${slug}/Summary`}>
        Summary
      </Link>
    </Menu>
  )
}

const getMenuLinks = slug => {
  var content = []
  for (var i = 1; i < 6; i++) {
    content.push(
      <Link className="menu-item" to={`/${slug}/Day${i}`}>
        Day {i}
      </Link>
    )
  }
  return content
}

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    marginTop: "1rem",
    textShadow: "none",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
}
