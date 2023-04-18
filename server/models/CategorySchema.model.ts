import { sequelize } from ".";
import { DataTypes } from "sequelize";

const CategorySchema = sequelize.define("category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

export default CategorySchema;
