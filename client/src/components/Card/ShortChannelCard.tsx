import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { fakeImageUrl } from "../../utils";

const ShortChannelCard = () => {
  return (
    <div className="">
      <div className="">
        <LazyLoadImage
          effect="blur"
          src={
            "https://i.ytimg.com/vi/stqbkhqg7Cc/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLD0msIK3dGxfQ-EI0qvnwtvtGk0cQ"
          }
          alt=""
          className="w-full rounded-xl aspect-[9/16]"
        />
      </div>
      <h2 className="line-clamp-2 text-base-content font-bold text-sm">
        Anh đã từ bỏ rồi đấy - Datisekai
      </h2>
      <p className="text-sm">3 lượt xem</p>
    </div>
  );
};

export default ShortChannelCard;
