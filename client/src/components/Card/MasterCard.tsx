import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { fakeImageUrl } from "../../utils";
import { Link } from "react-router-dom";
import AvatarCircle from "../AvatarCircle";

const MasterCard = () => {
  return (
    <div className="space-y-2">
      <div className="aspect-video">
        <LazyLoadImage
          alt=""
          src={fakeImageUrl}
          effect="blur"
          className="w-full rounded-md"
        />
      </div>
      <div className="flex items-start space-x-2">
        <AvatarCircle />
        <div className="space-y-2">
          <Link to={`/watch/1`}>
            <h2 className="text-base-content font-bold link link-hover  line-clamp-2">
              Nhạc Lofi Tiktok Nhẹ Nhàng - Những Bản Nhạc Lofi Chill Tiktok -
              Nhạc Lofi Chill Gây Nghiện Hay Nhất
            </h2>
          </Link>
          <div className="">
            <Link to={'/channel/1'}><span className="link link-hover">mer màng</span></Link>
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
