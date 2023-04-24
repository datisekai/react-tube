import React from "react";
import {
  faVideo,
  faHeart,
  faEye,
  faUsersLine,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowSize } from "usehooks-ts";
import { fakeImageUrl, generateArray } from "../utils";

const Dashboard = () => {
  const windowSize = useWindowSize();
  return (
    <div className="space-y-4 py-4 overflow-x-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <div className="bg-info rounded-md p-4 gap-x-1 text-info-content flex items-center justify-between">
          <div>
            <h2>Tổng Video</h2>
            <p>4</p>
          </div>
          <FontAwesomeIcon icon={faVideo} className="text-xl" />
        </div>
        <div className="bg-warning rounded-md p-4 gap-x-1 text-warning-content flex items-center justify-between">
          <div>
            <h2>Tổng lượt xem</h2>
            <p>4</p>
          </div>
          <FontAwesomeIcon icon={faEye} className="text-xl" />
        </div>
        <div className="bg-error rounded-md gap-x-1 p-4 text-error-content flex items-center justify-between">
          <div>
            <h2>Tổng lượt thích</h2>
            <p>4</p>
          </div>
          <FontAwesomeIcon icon={faHeart} className="text-xl" />
        </div>
        <div className="bg-neutral gap-x-1 rounded-md p-4 text-neutral-content flex items-center justify-between">
          <div>
            <h2>Tổng người dùng</h2>
            <p>4</p>
          </div>
          <FontAwesomeIcon icon={faUsersLine} className="text-xl" />
        </div>
      </div>
      <div>
        <div
          className="overflow-x-auto "
          // style={{ maxWidth: `${windowSize.width - 36}px` }} 
        >
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
               
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {generateArray(5).map((item) => (
                <tr key={item}>
                 
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={fakeImageUrl}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>Purple</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
