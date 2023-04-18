import { sequelize } from ".";
import { DataTypes } from "sequelize";
import GroupSchema from "./GroupSchema.model";
import PermissionSchema from "./PermissionSchema.model";

const GroupPermissionSchema = sequelize.define("auth_group_permission", {
  group_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: GroupSchema,
      key: "id",
    },
  },
  permission_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: PermissionSchema,
      key: "id",
    },
  },
});

GroupPermissionSchema.belongsTo(GroupSchema, { foreignKey: 'group_id' });
GroupSchema.hasMany(GroupPermissionSchema, { foreignKey: 'group_id' });

GroupPermissionSchema.belongsTo(PermissionSchema, { foreignKey: 'permission_id' });
PermissionSchema.hasMany(GroupPermissionSchema, { foreignKey: 'permission_id' });


export default GroupPermissionSchema;
