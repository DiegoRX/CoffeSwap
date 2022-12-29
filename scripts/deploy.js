const hre = require("hardhat");

async function main(){

  const Storage = await hre.ethers.getContractFactory("MyToken");

  console.log(Storage)
  const storage = await Storage.deploy();

  await storage.deployed();
  console.log("MyToken deployed to:",storage.address);
}

main().then(()=> process.exit(0)).catch(error=>{
  console.error(error);
  process.exit(1);
});