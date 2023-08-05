require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [
        `0xeac6e83696b731368c07735ffeafea5d1c413dd62d322d2ae0758c360f6011dc`,
      ],
    },
  },
  paths: {
    artifacts: "./client/src",
  },
};
// npx hardhat run scripts/finalDeploy.js --network ganache
