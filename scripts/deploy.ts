import hre from "hardhat";
import { writeFileSync } from "fs";

const outputFilePath = `./deployments/${hre.network.name}.json`;

async function main() {
  const MintableNft = await hre.ethers.getContractFactory("MintableNFT");
  const nft = await MintableNft.deploy();
  await nft.deployed();

  console.log("MintableNft deployed to >>>>>>>>>>>", nft.address);

  const output = { MintableNft: nft.address };

  writeFileSync(outputFilePath, JSON.stringify(output, null, 2));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
