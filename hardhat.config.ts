import "@nomiclabs/hardhat-waffle";
import { HardhatUserConfig } from "hardhat/config";

import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

const config: HardhatUserConfig = {
  solidity: "0.6.12",
  networks: {
    matictest:{
      url: process.env.RPC || "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env["PRIVATE_KEY"]]
    }
  },
};

export default config;
