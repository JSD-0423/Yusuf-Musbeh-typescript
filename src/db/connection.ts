import {Sequelize} from "sequelize";
import {configDotenv} from "dotenv";

configDotenv()

const sequelize = new Sequelize(process.env.DATABASE_NAME ?? "main", process.env.DATABASE_USERNAME ?? "default", process.env.DATABASE_PASSWORD ?? "default", {
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

export {sequelize, authenticateConnection};
