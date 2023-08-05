async function main() {
  const chai = await ethers.getContractFactory("chai");
  const contract = await chai.deploy(); //instance of contract

  console.log("Address of contract:", contract.runner.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// npx hardhat run scripts/finalDeploy.js --network ganache
