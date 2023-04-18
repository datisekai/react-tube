import {
  faHouse,
  faCirclePlay,
  faRecordVinyl,
  faClockRotateLeft,
  faVideo,
  faThumbsUp
} from "@fortawesome/free-solid-svg-icons";

const category = {
  main: [
    {
      title: "Trang chủ",
      url: "/",
      icon: faHouse,
    },
    {
      title: "Short",
      url: "/short",
      icon: faCirclePlay,
    },
    {
      title: "Kênh đăng ký",
      url: "/subcribe",
      icon: faRecordVinyl,
    },
  ],
  more: [
    {
      title: "Video đã xem",
      url: "/watched-video",
      icon: faClockRotateLeft,
    },
    {
      title: "Video của bạn",
      url: "/my-video",
      icon: faVideo,
    },
    {
      title: "Video đã thích",
      url: "/liked-video",
      icon: faThumbsUp,
    },
  ],
};

export default category;
