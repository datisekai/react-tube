import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { fakeImageUrl } from "../../utils";

const MasterCard = () => {
  return (
    <div className="space-y-2">
      <LazyLoadImage
        alt=""
        src={fakeImageUrl}
        effect="blur"
        className="w-full aspect-video rounded-md"
      />
      <div className="flex items-start space-x-2">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="/assets/fav.jpg" />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-base-content link link-hover  line-clamp-2">
            Nhạc Lofi Tiktok Nhẹ Nhàng - Những Bản Nhạc Lofi Chill Tiktok - Nhạc
            Lofi Chill Gây Nghiện Hay Nhất
          </h2>
          <div className="">
            <span>mer màng</span>
            <div className="flex items-center">
              <span>6,4N lượt xem</span>
              <div className="divider divider-horizontal"></div>
              <span>8 ngày trước</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterCard;
