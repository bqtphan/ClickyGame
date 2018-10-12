  import React from "react";
import "./Header.css";

const Header = props => (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<ul className="navbar-nav mr-auto">

<div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <h1 id="title">React Clicky Game </h1>
      </li>
      <li class="nav-item">
        <h1 id="message">Don't click on the same picture twice!{props.message}</h1>
      </li>
      <li class="nav-item">
        <h1 id="score">Score: {props.score}</h1>
      </li>
    </ul>
</div>
</ul>
</nav>
);

export default Header;
