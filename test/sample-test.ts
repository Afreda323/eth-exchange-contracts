import { ethers } from "hardhat";
import { Signer } from "ethers";
import { expect } from "chai";

describe("Token", function () {
  let accounts: Signer[];

  beforeEach(async function () {
    accounts = await ethers.getSigners();
  });

  it("should do something right", async function () {
    expect(accounts.length).to.greaterThan(0);
  });
});
