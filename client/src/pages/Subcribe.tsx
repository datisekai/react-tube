import React, { useState } from "react";
import { faTableCells, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MasterCard from "../components/Card/MasterCard";
import { generateArray } from "../utils";
import MasterCardHorizon from "../components/Card/MasterCardHorizon";

const Subcribe = () => {
  const [displayType, setDisplayType] = useState("grid");
  return (
    <div className="py-2">
      <div className="flex justify-between items-center">
        <h2 className="font-bold">Kênh đăng ký</h2>
        <div className="flex justify-end items-center space-x-1">
          <h3 className="font-bold">Quản lý</h3>
          <button
            onClick={() => setDisplayType("grid")}
            className="btn btn-ghost btn-sm"
          >
            <FontAwesomeIcon className="text-lg" icon={faTableCells} />
          </button>
          <button
            onClick={() => setDisplayType("list")}
            className="btn btn-ghost btn-sm"
          >
            <FontAwesomeIcon className="text-lg" icon={faList} />
          </button>
        </div>
      </div>
      <div className="mt-4">
        {displayType === "grid" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {generateArray(20).map((item) => (
              <MasterCard key={item} />
            ))}
          </div>
        )}

        {displayType === "list" && (
          <div className="space-y-4">
            {generateArray(20).map((item) => (
              <MasterCardHorizon key={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Subcribe;
