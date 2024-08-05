import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./index.scss";

export default function DynamicSidebar() {
  return (
    <div className="dynamicSidebar">
      <SidebarDropdown
        title="Hooks"
        links={[
          {
            title: "use all images from a folder",
            url: "/c/slideshows/simple-mobile-slideshow",
          },
        ]}
      />
      <SidebarDropdown
        title="Navigation Components"
        links={[
          {
            title: "Nav components",
            url: "/",
          },
          {
            title: "Simple navbar",
            url: "/",
          },
          {
            title: "Dynamic sidebar",
            url: "/",
          },
        ]}
      />
      <SidebarDropdown
        title="Slideshows"
        links={[
          {
            title: "Simple mobile slideshow",
            url: "/c/slideshows/simple-mobile-slideshow",
          },
        ]}
      />
    </div>
  );
}

function SidebarDropdown(props) {
  const [open, setOpen] = useState();

  return (
    <div className="sidebarDropdown">
      <div className="dropdownTitle" onMouseDown={() => setOpen(!open)}>
        {props.title}
        <span className="toggleIcon">
          {open ? (
            <i class="fa-solid fa-angle-down"></i>
          ) : (
            <i class="fa-solid fa-angle-right"></i>
          )}
        </span>
      </div>
      <div
        className={`dropdownLinksContainer ${
          open
            ? "dropdownLinksContainer__open"
            : "dropdownLinksContainer__closed"
        }`}
      >
        {props.links.map((pageLink, index) => (
          <Link to={pageLink.url} className="dropdownLink" key={index}>
            <div className="dropdownLinkTitle">{pageLink.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
