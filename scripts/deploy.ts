import { ethers, run } from 'hardhat'

async function main() {
  await run('compile')
  const Greeter = await ethers.getContractFactory('Greeter')
  const greeter = await Greeter.deploy('Hello, Hardhat!')

  await greeter.deployed()

  console.log('Greeter deployed to:', greeter.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
