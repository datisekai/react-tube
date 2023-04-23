import { Link, useNavigate } from "react-router-dom";
import { themes } from "./data/theme";
import { useEffect, useState, FC, useContext } from "react";
import {
  faBars,
  faMagnifyingGlass,
  faArrowLeft,
  faGear,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AvatarCircle from "./AvatarCircle";
import { AuthContext } from "../context/AuthContext";

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

  const { user, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    setUser();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  };

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
                <AvatarCircle />
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
              <label
                tabIndex={0}
                className="btn btn-ghost gap-2 btn-circle avatar"
              >
                {user ? (
                  <AvatarCircle width="w-10" />
                ) : (
                  <FontAwesomeIcon icon={faGear} className="text-xl" />
                )}
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 text-neutral-content shadow menu menu-compact dropdown-content bg-neutral rounded-box w-52"
              >
                {user && (
                  <Link to={"/dashboard/"}>
                    <li>
                      <div className="justify-between">Dashboard</div>
                    </li>
                  </Link>
                )}
                {!user && (
                  <Link to={"/login"}>
                    <li>
                      <div className="justify-between">Đăng nhập</div>
                    </li>
                  </Link>
                )}

                {user && (
                  <Link to={`/channel/1`}>
                    {" "}
                    <li>
                      <div className="justify-between">Kênh của bạn</div>
                    </li>
                  </Link>
                )}
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

                {user && (
                  <li onClick={handleLogout}>
                    <div>Đăng xuất</div>
                  </li>
                )}
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
