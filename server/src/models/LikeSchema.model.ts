import { sequelize } from ".";
import { DataTypes } from "sequelize";
import UserSchema from "./UserSchema.model";
import VideoSchema from "./VideoSchema.model";

const LikeSchema = sequelize.define("like", {
  liked: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  disliked: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

LikeSchema.belongsTo(UserSchema, { foreignKey: "user_id" });
LikeSchema.belongsTo(VideoSchema, { foreignKey: "video_id" });
UserSchema.hasMany(LikeSchema, { foreignKey: "user_id" });
VideoSchema.hasMany(LikeSchema, { foreignKey: "video_id" });
