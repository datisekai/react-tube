import React from "react";
import {
  faThumbsUp,
  faThumbsDown,
  faShare,
  faChevronDown,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Share from "../Share";
import { Link } from "react-router-dom";
const ShortCard = () => {
  return (
    <div className="flex gap-x-1 relative">
      <div className="flex w-full md:w-[347px] aspect-[9/13] md:aspect-[9/16]">
        <video
          className="w-full h-full bg-neutral rounded-md"
          src="http://res.cloudinary.com/an-nguyen/video/upload/v1672922098/mx7xdqstg8ndthhuoerm.mp4"
        ></video>
      </div>
      <div className="flex flex-col justify-end absolute md:static right-1 bottom-2">
        <div className="flex flex-col items-center">
          <button className="btn btn-circle bg-[rgba(0,0,0,0.6)] md:bg-neutral shadow-md text-neutral-content">
            <FontAwesomeIcon icon={faThumbsUp} className="text-xl" />
          </button>
          <span className="font-bold">1</span>
        </div>
        <div className="flex flex-col items-center">
          <button className="btn btn-circle bg-[rgba(0,0,0,0.6)] md:bg-neutral shadow-md text-neutral-content">
            <FontAwesomeIcon icon={faThumbsDown} className="text-xl" />
          </button>
          <span className="font-bold">1</span>
        </div>
        <Link to={`/watch/1`}>
          <div className="flex flex-col items-center">
            <button className="btn btn-circle bg-[rgba(0,0,0,0.6)] md:bg-neutral shadow-md text-neutral-content">
              <FontAwesomeIcon icon={faCommentDots} className="text-xl" />
            </button>
            <span className="font-bold">1</span>
          </div>
        </Link>
        <Share
          button={
            <div className="flex flex-col items-center">
              <div className="btn btn-circle bg-[rgba(0,0,0,0.6)] md:bg-neutral shadow-md text-neutral-content">
                <FontAwesomeIcon icon={faShare} className="text-xl" />
              </div>
              <span className="font-bold">Chia sẻ</span>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default ShortCard;
