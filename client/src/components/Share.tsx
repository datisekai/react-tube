import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import shareData from "./data/social";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

interface ShareProps {
  button: React.ReactNode;
}

export const copyToClipboard = (text: string) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text);
      return toast.success("Copy liên kết thành công");
    } else {
      let textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise((res: any, rej: any) => {
        document.execCommand("copy") ? res() : rej();
        textArea.remove();
        toast.success("Copy liên kết thành công");
      });
    }
  } catch (error) {
    console.error(error);
    return toast.error("Copy liên kết thất bại");
  }
};

const Share: FC<ShareProps> = ({ button }) => {
  return (
    <>
      <label htmlFor="my-modal" className="">
        {button}
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal z-[1000] ">
        <div className="modal-box">
          <label
            htmlFor="my-modal"
            className="btn btn-outline absolute btn-sm right-2 top-2"
          >
            <FontAwesomeIcon icon={faXmark} className="text-lg" />
          </label>
          <h3 className="font-bold text-lg">Chia sẻ</h3>
          <div className="flex items-center gap-2 mt-2">
            {shareData.map((item, index) => (
              <button
                key={index}
                className="btn btn-circle btn-neutral text-neutral-content"
              >
                <FontAwesomeIcon className="text-2xl" icon={item.Icon} />
              </button>
            ))}
          </div>
          <div className="modal-action">
            {/* <label htmlFor="my-modal" className="btn">
              Yay!
            </label> */}
            <div className="flex border border-primary items-center justify-between w-full bg-neutral px-2 text-neutral-content rounded-md py-2">
              <p className="max-w-[60%] md:max-w-[80%] overflow-x-hidden text-ellipsis">
                https://youtu.be/TvgqBnZgTVY
              </p>
              <button
                onClick={() => copyToClipboard(window.location.href)}
                className="btn-primary btn btn-sm normal-case"
              >
                Sao chép
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Share;
