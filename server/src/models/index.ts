import { Sequelize } from "sequelize";
import config from "../config";

export const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  dialectOptions: {
    ssl:true
  }, //removed ssl
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected..");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db: any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = import('./UserSchema.model');
db.group = import('./GroupSchema.model')
db.permission = import('./PermissionSchema.model')
db.user_group = import('./UserGroupSchema.model')
db.group_permisison = import('./GroupPermissionSchema.model')


db.category = import('./CategorySchema.model')
db.video = import('./VideoSchema.model')

db.like = import('./LikeSchema.model')
db.follow = import('./FollowSchema.model')

db.comment = import('./CommentSchema.model')

db.watched_video = import('./WatchedVideoSchema.model')

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!");
});
