import { HardhatUserConfig } from 'hardhat/types/config'
import dotEnvExtended from 'dotenv-extended'
dotEnvExtended.load()
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'
import 'hardhat-typechain'

const INFURA_API_KEY = process.env.INFURA_API_KEY || ''
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY!
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

const rinkeby =
  INFURA_API_KEY && RINKEBY_PRIVATE_KEY
    ? {
        url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
        accounts: [RINKEBY_PRIVATE_KEY],
      }
    : {}

const etherscan = ETHERSCAN_API_KEY
  ? {
      apiKey: ETHERSCAN_API_KEY,
    }
  : undefined

const config: HardhatUserConfig = {
  solidity: '0.7.3',
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {},
    localhost: {},
    rinkeby,
  },
  etherscan,
}

export default config
