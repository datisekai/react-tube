import { sequelize } from ".";
import { DataTypes } from "sequelize";
import UserSchema from "./UserSchema.model";
import VideoSchema from "./VideoSchema.model";

const CommentSchema = sequelize.define("comment", {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  parent_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: UserSchema,
      key: "id",
    },
  },
  video_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: VideoSchema,
      key: "id",
    },
  },
});

CommentSchema.hasMany(CommentSchema, {
  as: "children",
  foreignKey: "parent_id",
});
CommentSchema.belongsTo(CommentSchema, {
  as: "parent",
  foreignKey: "parent_id",
});
CommentSchema.belongsTo(UserSchema, { as: "user", foreignKey: "user_id" });
CommentSchema.belongsTo(VideoSchema, { as: "video", foreignKey: "video_id" });

export default CommentSchema;
