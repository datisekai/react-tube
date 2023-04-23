import { sequelize } from ".";
import { DataTypes } from "sequelize";
import UserSchema from "./UserSchema.model";
import GroupSchema from "./GroupSchema.model";

const UserGroupSchema = sequelize.define("auth_user_group", {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: UserSchema,
      key: "id",
    },
  },
  group_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: GroupSchema,
      key: "id",
    },
  },
});

UserGroupSchema.belongsTo(UserSchema, { foreignKey: 'user_id' });
UserSchema.hasMany(UserGroupSchema, { foreignKey: 'user_id' });

UserGroupSchema.belongsTo(GroupSchema, { foreignKey: 'group_id' });
GroupSchema.hasMany(UserGroupSchema, { foreignKey: 'group_id' });


export default UserGroupSchema;
