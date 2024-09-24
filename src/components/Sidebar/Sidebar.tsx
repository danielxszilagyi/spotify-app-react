import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  // Define props here
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  // Add component logic here

  return (
    <>
      <div className="sidebar ms-3 ms-sm-4 ms-xl-1 ms-xxl-3">
        <div className="mb-xl-4 mb-0 ">
          <NavLink
            to="/"
            // className=""
            className={({ isActive, isPending }) =>
              isActive
                ? "  fw-bold text-primary anim text-decoration-none "
                : " fs-2 fw-bold text-secondary anim text-decoration-none "
            }
            style={{ fontSize: "2.1rem" }}
          >
            Homework
          </NavLink>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item ">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive
                  ? "fs-1 text-primary opacity-75 my-3 text-decoration-none anim"
                  : "fs-1 text-secondary opacity-50 my-3 text-decoration-none anim"
              }
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/playlists"
              className={({ isActive, isPending }) =>
                isActive
                  ? "fs-1 text-primary opacity-75 my-3 text-decoration-none anim"
                  : "fs-1 text-secondary opacity-50 my-3 text-decoration-none anim"
              }
            >
              Playlists
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
