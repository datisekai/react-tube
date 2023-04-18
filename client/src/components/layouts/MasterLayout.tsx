import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";

const MasterLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="">
      <div className="flex">
        <div
          onClick={handleSidebar}
          className={`fixed right-0 top-0 z-[100] bottom-0 left-0 bg-[rgba(0,0,0,0.6)] ${
            openSidebar ? "block" : "hidden"
          }`}
        />

        <div
          className={`w-[240px] py-2 px-2 transition-transform fixed top-0 left-0 bottom-0 bg-base-100 z-[1000] ${
            openSidebar
              ? "translate-x-0"
              : "translate-x-[-100%] md:translate-x-0"
          }`}
        >
          <Sidebar />
        </div>
        <div className="flex-1 min-h-screen md:ml-[240px]">
          <Header handleSidebar={handleSidebar} />
          <div className="px-2">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterLayout;
