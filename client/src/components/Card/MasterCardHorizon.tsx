import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { fakeImageUrl } from "../../utils";

const MasterCardHorizon = () => {
  return (
    <Link to={`/watch/1`}>
      <div className="flex space-x-2">
        <div className="aspect-video w-[40%]">
          <LazyLoadImage
            src={fakeImageUrl}
            effect="blur"
            className="w-full rounded-md"
          />
        </div>
        <div className="flex-1">
          <h2 className="line-clamp-2 link link-hover font-bold text-sm">
            Nhạc Lofi Tiktok Nhẹ Nhàng - Những Bản Nhạc Lofi Chill Tiktok - Nhạc
            Lofi Chill Gây Nghiện Hay Nhất
          </h2>
          <span className="text-sm">Cloud Mood</span>
          <div className="flex items-center text-sm">
            <span>40 N lượt xem</span>
            <span className="dot">2 tuần trước</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MasterCardHorizon;
