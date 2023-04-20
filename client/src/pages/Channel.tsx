import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AvatarCircle from "../components/AvatarCircle";
import { useSearchParams } from "react-router-dom";
import { tabChannel } from "../components/data/tab-channel";
import { generateArray } from "../utils";
import MasterCard from "../components/Card/MasterCard";
import ShortChannelCard from "../components/Card/ShortChannelCard";

const Channel = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeTab = (action: string) => {
    setSearchParams({ ...searchParams, action });
  };

  return (
    <div>
      <div className="">
        <LazyLoadImage
        effect="blur"
          src="/assets/anhbia.png"
          className="w-full aspect-[6/1]"
        />
      </div>
      <div className=" mx-auto max-w-full md:max-w-[80%] pb-5">
        <div className="py-4 flex items-start gap-y-2 md:gap-y-0 md:items-center flex-col md:flex-row gap-x-4">
          <AvatarCircle width="w-28 md:w-32" />
          <div className="flex-1 flex flex-col md:flex-row gap-y-2 md:gap-y-0 items-start justify-between">
            <div>
              <h1 className="font-bold text-base-content">Hạ Sang</h1>
              <div className="flex items-center gap-x-2">
                <span>@datisekai</span>
                <div className="dot"></div>
                <span>3 người đăng ký</span>
                <div className="dot"></div>
                <span>2 video</span>
              </div>
            </div>
            <button className="btn btn-primary text-primary-content normal-case">
              Đăng ký
            </button>
          </div>
        </div>
        <div className="">
          <div className="tabs">
            {tabChannel.map((item) => (
              <button
                onClick={() => handleChangeTab(item.key)}
                key={item.key}
                className={`tab tab-md md:tab-lg tab-bordered ${
                  item.key === (searchParams.get("action") || "video")
                    ? "tab-active"
                    : ""
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
        {(searchParams.get("action") || "video") == "video" && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-4">
            {generateArray(8).map((item) => (
              <MasterCard key={item} />
            ))}
          </div>
        )}

        {searchParams.get("action") == "short" && (
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-1 gap-y-4">
            {generateArray(8).map((item) => (
              <ShortChannelCard key={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Channel;
