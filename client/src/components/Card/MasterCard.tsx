import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { fakeImageUrl } from "../../utils";
import { Link } from "react-router-dom";
import AvatarCircle from "../AvatarCircle";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MasterCard = () => {
  return (
    <div className="space-y-2  hover:cursor-pointer">
      <div className="aspect-video relative image-master-card">
        <LazyLoadImage
          alt=""
          src={fakeImageUrl}
          effect="blur"
          className="w-full block  aspect-video rounded-md h-full"
        />
        <div>
          <Link to={"/watch/1"}>
            <div className="absolute play-master-card  rounded-md flex items-center justify-center inset-0 bg-[rgba(0,0,0,0.6)]">
              <div className="btn btn-ghost">
                <FontAwesomeIcon className="text-2xl" icon={faPlay} />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <Link to={"/channel/1"}>
          <AvatarCircle />
        </Link>
        <div className="space-y-2">
          <Link to={`/watch/1`}>
            <h2 className="text-base-content font-bold link link-hover  line-clamp-2">
              Nhạc Lofi Tiktok Nhẹ Nhàng - Những Bản Nhạc Lofi Chill Tiktok -
              Nhạc Lofi Chill Gây Nghiện Hay Nhất
            </h2>
          </Link>
          <div className="">
            <Link to={"/channel/1"}>
              <span className="link link-hover">mer màng</span>
            </Link>
            <div className="flex items-center text-sm">
              <span>6,4N lượt xem</span>
              <span className="dot">8 ngày trước</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterCard;
