import { sequelize } from ".";
import { DataTypes } from "sequelize";
import UserSchema from "./UserSchema.model";
import VideoSchema from "./VideoSchema.model";


const WatchedVideoSchema = sequelize.define("watched_video", {
    video_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: VideoSchema,
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UserSchema,
        key: "id",
      },
    },
    watched_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });
  
  export default WatchedVideoSchema