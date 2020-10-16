import React from "react"
import { Link } from "gatsby"


export default function Header(props) {
  return ( 
          <div className="head-container">
            <h1>{props.headerText}</h1>
          </div>
  );
}
