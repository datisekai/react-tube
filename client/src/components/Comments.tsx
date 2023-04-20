import React from "react";
import { faSort, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AvatarCircle from "./AvatarCircle";
import { generateArray } from "../utils";
import CommentCard from "./Card/CommentCard";
import EmojiPicker from "emoji-picker-react";
const Comments = () => {
  const [textMessage, setTextMessage] = React.useState("");
  const inputRef = React.useRef<any>(null);

  const handleEmojiClick = (emojiData: any, event: any) => {
    setTextMessage(textMessage + emojiData.emoji);
    inputRef?.current?.focus();
  };

  return (
    <div>
      <div className="flex items-center space-x-4">
        <h4>68 bình luận</h4>

        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost gap-2 normal-case">
            <FontAwesomeIcon icon={faSort} />
            Sắp xếp theo
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-neutral text-neutral-content rounded-box w-52"
          >
            <li>
              <a>Mới nhất</a>
            </li>
            <li>
              <a>Cũ nhất</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center space-x-2 mt-2">
        <AvatarCircle />
        <div className="flex space-x-1 flex-1">
          <input
            type="text"
            ref={inputRef}
            value={textMessage}
            onChange={(e) => setTextMessage(e.target.value)}
            placeholder="Viết bình luận"
            className="input input-bordered w-full max-w-md"
          />

          <div className="dropdown dropdown-top dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              <FontAwesomeIcon className="text-xl" icon={faFaceSmile} />
            </label>
            <div
              tabIndex={0}
              className="dropdown-content w-70 sm:w-80 md:w-90 p-2 shadow-md bg-base-100 text-base-content"
            >
              <EmojiPicker
                width={"100%"}
                emojiVersion={"1.0"}
                onEmojiClick={handleEmojiClick}
              />
            </div>
          </div>
          <button className="btn btn-ghost">Gửi</button>
        </div>
      </div>

      <div className="space-y-2 mt-4">
        {generateArray(5).map((item) => (
          <CommentCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
