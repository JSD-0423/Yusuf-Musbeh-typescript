import { Sequelize } from "sequelize";
const sequelize = new Sequelize("main", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

async function authenticateConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
  } catch (e) {
    console.error("Something went wrong with the connection");
  }
}
export { sequelize, authenticateConnection };
