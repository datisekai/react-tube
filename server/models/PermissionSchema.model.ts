import { sequelize } from ".";
import { DataTypes } from "sequelize";

const PermissionSchema = sequelize.define("auth_permission", {
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  codename: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

export default PermissionSchema;
