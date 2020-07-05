import React from "react";

const Link = ({ path, activeLink, text }) => (
  <a href={path} className={`commonLink  ${activeLink ? "activeLink" : ""}`}>
    {text}
  </a>
);

export default Link;
