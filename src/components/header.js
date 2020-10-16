import React from "react"
import { Link } from "gatsby"


export default function Header(props) {
  return ( 
          <div className="head-container">
            <h1>{props.headerText}</h1>
          <h2>something</h2>
            <ol> 
              <li><Link to="/home/">Home</Link></li>
              <li><Link to="/about/">About</Link></li>
              <li><Link to="/philosophy/">Philosophy</Link></li>
            </ol>
          </div>
  );
}
