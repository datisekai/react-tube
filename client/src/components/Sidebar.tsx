import React from "react";
import category from "./data/category";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import AvatarCircle from "../pages/AvatarCircle";

const Sidebar = () => {
  return (
    <>
      <ul className="space-y-2 pt-2">
        {category.main.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                to={item.url}
                className={({ isActive, isPending }) =>
                  `flex items-center w-full space-x-4 transition-all hover:bg-primary hover:text-primary-content  px-4 py-2 rounded-md ${
                    isActive
                      ? "bg-primary text-primary-content"
                      : "bg-base-100 text-base-content"
                  }`
                }
              >
                <FontAwesomeIcon
                  className="text-md md:text-lg"
                  icon={item.icon}
                />
                <span className="text-md">{item.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="divider"></div>
      <ul className="space-y-2 ">
        {category.more.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                to={item.url}
                className={({ isActive, isPending }) =>
                  `flex items-center w-full space-x-4 transition-all hover:text-primary-content hover:bg-primary px-4 py-2 rounded-md ${
                    isActive
                      ? "bg-primary text-primary-content"
                      : "bg-base-100 text-base-content"
                  }`
                }
              >
                <FontAwesomeIcon
                  className="text-md md:text-lg"
                  icon={item.icon}
                />
                <span className="text-md">{item.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="divider"></div>
      <div className="">
        <h2 className="mt-2">Kênh đăng ký</h2>
        <ul className="space-y-2 mt-2">
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <li key={item}>
              <Link to={`/${item}`}>
                <div className="flex items-center space-x-4 transition-all hover:text-primary-content hover:bg-primary  px-4 py-2 rounded-md text-primary-content">
                 <AvatarCircle width="w-8"/>
                  <span className="text-md text-base-content ">evondev</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
