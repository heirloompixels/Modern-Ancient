import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function Home() {
  return (
          <div style={{ margin: 100 }}>
            <Header headerText="modern ancient" />
            <h2>Home</h2>
            <ul>
              <li><Link to="/home/">Home</Link></li>
              <li><Link to="/about/">About</Link></li>
              <li><Link to="/philosophy/">Philosophy</Link></li>
            </ul>
            <img src="https://source.unsplash.com/random/400x200" alt="" />
          </div>
  );
}
