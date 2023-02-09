import React from "react";
import { NavLink } from "react-router-dom";
import { PngSidebarlogo } from "../assets";
import { sidebarEnteries } from "../screens/globalarray";

export default function Sidebar() {
  return (
    <div className="container__sidebar">
      <div className="container__sidebar__header__logo">
        <img src={PngSidebarlogo} alt="sidebarlogo" />
      </div>
      <div className="container__sidebar__entries">
        {sidebarEnteries.map((item) => {
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className="container__sidebar__entry__content__entry"
            >
              {item.icon}
              {item.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
