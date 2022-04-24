import { Sequelize } from "sequelize";

const sequelize = new Sequelize("ensolvers-db", "user", "pass", {
  dialect: "sqlite",
  host: "./data/ensolvers.sqlite",
});

export default sequelize;
