import React, { useState } from "react";
import ReactPlayer from "react-player";
import { generateArray } from "../utils";
import MasterCardHorizon from "../components/Card/MasterCardHorizon";
import AvatarCircle from "./AvatarCircle";
import {
  faThumbsUp,
  faThumbsDown,
  faShare,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Comments from "../components/Comments";
import Share from "../components/Share";

const html = `
<p>
  For years parents have espoused the health benefits of eating garlic bread with cheese to their
  children, with the food earning such an iconic status in our culture that kids will often dress
  up as warm, cheesy loaf for Halloween.
</p>
<p>
  But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
  springing up around the country.
</p>`;

const Watch = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="pt-2 pb-5 space-x-4 flex items-start flex-col md:flex-row">
      <div className="w-full md:w-[65%] aspect-video shadow-sm space-y-4 ">
        <div className="bg-neutral">
          <ReactPlayer
            width={"100%"}
            muted={true}
            height={"100%"}
            url={
              "http://res.cloudinary.com/an-nguyen/video/upload/v1672922098/mx7xdqstg8ndthhuoerm.mp4"
            }
            controls
            playing={true}
          />
        </div>
        <h1 className="font-bold text-lg text-base-content">
          Nhạc Lofi Tiktok Nhẹ Nhàng - Những Bản Nhạc Lofi Chill Tiktok - Nhạc
          Lofi Chill Gây Nghiện Hay Nhất
        </h1>
        <div className="flex justify-between flex-col lg:flex-row gap-y-4 items-start lg:items-center">
          <div className="flex items-center space-x-4">
            <AvatarCircle />
            <div>
              <h3 className="font-bold">mer màng</h3>
              <span className="text-sm">6,66N người đăng ký</span>
            </div>
            <button className="btn btn-primary text-primary-content capitalize btn-md">
              Đăng ký
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="btn btn-bg-neutral flex space-x-2">
                <FontAwesomeIcon className="text-lg" icon={faThumbsUp} />
                <span>4,8N</span>
              </div>
              <div className="btn btn-bg-neutral flex space-x-2">
                <FontAwesomeIcon className="text-lg" icon={faThumbsDown} />
                <span>4,8N</span>
              </div>

              {/* The button to open modal */}
              <Share
                button={
                  <div className="btn btn-bg-neutral flex gap-2">
                    <FontAwesomeIcon className="text-lg" icon={faShare} />
                    <span className="capitalize">Chia sẻ</span>
                  </div>
                }
              />
            </div>
          </div>
        </div>

        <div className="bg-neutral rounded-md py-2 px-4 text-neutral-content">
          <div className="flex items-center">
            <span className="font-bold">327N lượt xem</span>
            <div className="divider divider-horizontal"></div>
            <span className="font-bold">2 tháng trước</span>
          </div>
          <div>
            Nhạc Lofi Tiktok Nhẹ Nhàng - Những Bản Nhạc Lofi Chill Tiktok - Nhạc
            Lofi Chill Gây Nghiện Hay Nhất
          </div>

          {showMore && (
            <div
              className="prose mt-2 text-neutral-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          )}
          <button
            onClick={() => setShowMore(!showMore)}
            className="btn btn-ghost capitalize gap-2"
          >
            {showMore ? "Thu gọn" : "Hiện thêm"}
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>

        <Comments />
      </div>
      <div className="flex-1 mt-4 md:mt-0">
        {generateArray(10).map((item) => (
          <MasterCardHorizon key={item} />
        ))}
      </div>
    </div>
  );
};

export default Watch;
