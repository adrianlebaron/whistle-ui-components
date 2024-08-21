import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

function ComponentGithubLink(props) {
  return (
    <Link to={props.url} target="_blank" className="componentGithubLink">
      <i class="fa-brands fa-github"></i>
      <div className="githubText">Source code</div>
    </Link>
  );
}

export default ComponentGithubLink;
