import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { fakeImageUrl } from "../../utils";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const ShortChannelCard = () => {
  return (
    <div className="">
      <div className="aspect-[9/16] cursor-pointer relative image-master-card">
        <LazyLoadImage
          effect="blur"
          src={
            "https://i.ytimg.com/vi/stqbkhqg7Cc/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLD0msIK3dGxfQ-EI0qvnwtvtGk0cQ"
          }
          alt=""
          className="w-full rounded-xl"
        />
         <div>
          <Link to={"/watch/1"}>
            <div className="absolute play-master-card rounded-md flex items-center justify-center inset-0 bg-[rgba(0,0,0,0.6)]">
              <div className="btn btn-ghost">
                <FontAwesomeIcon className="text-2xl" icon={faPlay} />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <h2 className="line-clamp-2 mt-1 text-base-content font-bold text-sm">
        Anh đã từ bỏ rồi đấy - Datisekai
      </h2>
      <p className="text-sm">3 lượt xem</p>
    </div>
  );
};

export default ShortChannelCard;
