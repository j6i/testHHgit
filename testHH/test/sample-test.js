const { assert } = require("chai");

describe("testHH", function () {
  it("Should return true twice", async function () {
    const testHH = await ethers.getContractFactory("testHH");
    const test = await testHH.deploy();
    await test.deployed();

    assert.equal(await test.x(), 0);

    await test.mod();

    assert.equal(await test.x(), 42);
  });
});
