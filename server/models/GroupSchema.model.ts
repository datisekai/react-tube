import { sequelize } from ".";
import { DataTypes } from "sequelize";

const GroupSchema = sequelize.define("auth_group", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
})

export default GroupSchema;
