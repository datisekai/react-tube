import { sequelize } from ".";
import { DataTypes } from "sequelize";
import CategorySchema from "./CategorySchema.model";
import UserSchema from "./UserSchema.model";

const VideoSchema = sequelize.define("video", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  thumbnail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: CategorySchema,
      key: "id",
    },
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: UserSchema,
      key: "id",
    },
    allowNull: false,
  },
});

VideoSchema.belongsTo(UserSchema, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

VideoSchema.belongsTo(CategorySchema, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

export default VideoSchema;
