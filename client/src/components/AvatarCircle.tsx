import React, { FC } from "react";

interface AvatarCircleProps {
  width?: string;
  url?: string;
}

const AvatarCircle: FC<AvatarCircleProps> = ({
  url = "/assets/fav.jpg",
  width = "w-10",
}) => {
  return (
    <div className="avatar">
      <div className={`rounded-full ${width}`}>
        <img src={url} />
      </div>
    </div>
  );
};

export default AvatarCircle;
