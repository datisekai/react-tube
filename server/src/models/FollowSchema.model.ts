import { sequelize } from ".";
import { DataTypes } from "sequelize";
import UserSchema from "./UserSchema.model";

const FollowSchema = sequelize.define("follow", {
  follower_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: UserSchema,
      key: "id",
    },
  },
  following_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: UserSchema,
      key: "id",
    },
  },
});

export default FollowSchema
