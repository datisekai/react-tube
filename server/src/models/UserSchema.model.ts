import { sequelize } from ".";
import { DataTypes } from "sequelize";

const UserSchema = sequelize.define("auth_user", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  refreshToken:{
    type:DataTypes.STRING,
    allowNull:true,
  }
});

export default UserSchema;
