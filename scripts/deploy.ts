import { ethers, run } from 'hardhat';

async function main() {
  const account = ethers.provider.getSigner();
  await run('compile');
  const Factory = await ethers.getContractFactory('PonyFactory');
  const factory = await Factory.deploy('0x5A0bA5FbB798ef958AaD0fFb3EEcB494a0cad3cD');

  console.log(`Factory deployed to ${factory.address}`);
  console.log(`INIT_CODE, ${await factory.INIT_CODE_PAIR_HASH()}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
