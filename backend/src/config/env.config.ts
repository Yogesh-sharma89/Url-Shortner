
import dotenv from "dotenv";

dotenv.config();

const EnvConfig = {
    env:process.env["NODE_ENV"],
    port: process.env["PORT"]!,
    db: {
        url: process.env["DB_URL"]!
    },
    baseUrl:process.env["BASE_URL"]
}

export default EnvConfig;