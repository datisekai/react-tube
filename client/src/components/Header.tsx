import { Link } from "react-router-dom";
import { themes } from "./data/theme";
import { useEffect, useState, FC } from "react";
import {
  faBars,
  faMagnifyingGlass,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AvatarCircle from "../pages/AvatarCircle";

interface HeaderProps {
  handleSidebar: () => void;
}

const Header: FC<HeaderProps> = ({ handleSidebar }) => {
  const [theme, setTheme] = useState("");

  const [openSearchMobile, setOpenSearchMobile] = useState(false);

  useEffect(() => {
    const historyTheme = localStorage.getItem("data-theme") || "dark";
    if (historyTheme) {
      setTheme(historyTheme);
    } else {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setTheme("dark");
      } else {
        setTheme("light");
        console.log("Chủ đề (theme) light được kích hoạt");
      }
    }
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("data-theme", theme);
      document.querySelector("html")?.setAttribute("data-theme", theme);
    }
  }, [theme]);

  return (
    <>
      {!openSearchMobile ? (
        <div className="navbar  bg-base-100 sticky top-0 z-50 shadow-sm">
          <div
            className="btn btn-sm btn-ghost flex md:hidden"
            onClick={handleSidebar}
          >
            <FontAwesomeIcon className="text-lg" icon={faBars} />
          </div>
          <div className="flex-1">
            <Link to={"/"}>
              <div className="flex items-center btn-ghost space-x-2 btn text-primary">
                <AvatarCircle  />
                <h1 className="text-lg capitalize">React Tube</h1>
              </div>
            </Link>
          </div>
          <div
            onClick={() => setOpenSearchMobile(true)}
            className="btn btn-sm btn-ghost flex md:hidden"
          >
            <FontAwesomeIcon className="text-xl" icon={faMagnifyingGlass} />
          </div>
          <div className="flex-none gap-2">
            <div className="form-control hidden md:block">
              <input
                type="text"
                placeholder="Tìm kiếm"
                className="input input-bordered"
              />
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/assets/fav.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 text-neutral-content shadow menu menu-compact dropdown-content bg-neutral rounded-box w-52"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <select
                    onChange={(e) => setTheme(e.target.value)}
                    value={theme}
                    className="select select-ghost active:text-neutral-content focus:text-neutral-content capitalize bg-neutral text-neutral-content outline-none w-full max-w-xs"
                  >
                    {themes.map((item) => (
                      <option
                        className="text-neutral-content"
                        value={item}
                        key={item}
                      >
                        {item}
                      </option>
                    ))}
                  </select>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar bg-base-100 sticky top-0 z-50 shadow-sm">
          <div className="flex gap-x-2 w-full justify-between">
            <button
              className="btn btn-ghost"
              onClick={() => setOpenSearchMobile(false)}
            >
              <FontAwesomeIcon icon={faArrowLeft} className="text-xl" />
            </button>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <button className="btn btn-ghost">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
