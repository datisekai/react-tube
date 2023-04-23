import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AvatarCircle from "../AvatarCircle";
import category from "../data/category";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const SidebarAdmin = () => {
  return (
    <div className="py-5">
      <div className="flex flex-col mt-2 items-center">
        <AvatarCircle width="w-28" />
        <h2 className="font-bold">Quản lý React Tube</h2>
        <p>@datisekai</p>
      </div>
      <div className="mt-4">
        {category.dashboard.map((item) => (
          <NavLink to={item.url} className={({isActive}) => `px-4 py-3 block cursor-pointer hover:bg-neutral hover:text-neutral-content ${isActive ? 'bg-neutral text-neutral-content' : ''}`} key={item.url}>
              <div className="flex items-center gap-x-4">
                <FontAwesomeIcon icon={item.icon} />
                <h3>{item.title}</h3>
              </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SidebarAdmin;
