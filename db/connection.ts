import { Sequelize } from "sequelize";
const sequelize = new Sequelize("main", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

async function authenticateConnection() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Connection has been established successfully");
  } catch (e) {
    console.error("Something went wrong with the connection");
  }
}
export { sequelize, authenticateConnection };
