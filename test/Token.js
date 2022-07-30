const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};
describe("Token", () => {
  let token;
  let accounts;
  let deployer;
  beforeEach(async () => {
    //Fetch token from blockchain
    const Token = await ethers.getContractFactory("Token");
    token = await Token.deploy("Gemini", "GEM", "1000000");

    accounts = await ethers.getSigners();
    deployer = accounts[0];
  });
  describe("Deployment", () => {
    const name = "Gemini";
    const symbol = "GEM";
    const decimals = "18";
    const totalSupply = tokens("1000000");
    it("has correct name", async () => {
      //check name is correct
      expect(await token.name()).to.equal(name);
    });

    it("has correct symbol", async () => {
      //check name is correct
      expect(await token.symbol()).to.equal(symbol);
    });
    it("has correct decimals", async () => {
      //check name is correct
      expect(await token.decimals()).to.equal(decimals);
    });
    it("has correct total supply", async () => {
      //check name is correct

      expect(await token.totalSupply()).to.equal(totalSupply);
    });
    it("assigns total supply to deployer", async () => {
      expect(await token.balanceOf(deployer.address)).to.equal(totalSupply);
    });
  });
});
