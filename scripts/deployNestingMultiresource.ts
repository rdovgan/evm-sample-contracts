import { ethers } from "hardhat";
import { SimpleNestingMultiResource } from "../typechain-types";
import { ContractTransaction } from "ethers";

async function main() {
  const pricePerMint = ethers.utils.parseEther("0.0000000001");
  const totalTokens = 5;
  const [owner] = await ethers.getSigners();

  const contractFactory = await ethers.getContractFactory(
    "SimpleNestingMultiResource"
  );
  const token: SimpleNestingMultiResource = await contractFactory.deploy();

  await token.deployed();
  console.log(`Sample contract deployed to ${token.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
