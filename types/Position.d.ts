import { BigNumber } from "ethers"

export interface Position {
  collateral: BigNumber
  debt: BigNumber
  chain: string
  protocol: string
}
