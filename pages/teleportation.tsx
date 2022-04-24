import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useAccount } from "wagmi"
import { BigNumber } from "ethers"
import { tokensRinkeby, tokensKovan } from "../globals/tokens"
import styles from "./teleport.module.css"
import TeleportForm from "../components/TeleportForm"
import { Position } from "../types/Position.d"
import PositionItem from "../components/PositionItem"
import { Box } from "reflexbox"

const COLL = "WBTC"
const DEBT = "USDC"

export default function Teleport() {
  const router = useRouter()
  const { txState } = router.query

  const [{ data }] = useAccount({})
  const [positions, setPositions] = useState<Position[]>([])
  const [positionToTeleport, setPositionToTeleport] = useState<Position>()

  useEffect(() => {
    if (!data?.address) return

    if (txState) {
      const positionAave = {
        collateral: BigNumber.from(0),
        collateralToken: tokensRinkeby[COLL],
        debt: BigNumber.from(0),
        debtToken: tokensRinkeby[DEBT],
        chain: "Rinkeby",
        protocol: "Aave",
      }
      const positionCompound = {
        collateral: BigNumber.from(Math.pow(10, 8).toString()),
        collateralToken: tokensKovan[COLL],
        debt: BigNumber.from(Math.pow(100, 5).toString()),
        debtToken: tokensKovan[DEBT],
        chain: "Kovan",
        protocol: "Compound",
      }
      setPositions([positionAave, positionCompound])
    } else {
      const positionAave = {
        collateral: BigNumber.from(Math.pow(10, 8).toString()),
        collateralToken: tokensRinkeby[COLL],
        debt: BigNumber.from(Math.pow(100, 5).toString()),
        debtToken: tokensRinkeby[DEBT],
        chain: "Rinkeby",
        protocol: "Aave",
      }
      const positionCompound = {
        collateral: BigNumber.from(0),
        collateralToken: tokensKovan[COLL],
        debt: BigNumber.from(0),
        debtToken: tokensKovan[DEBT],
        chain: "Kovan",
        protocol: "Compound",
      }
      setPositions([positionAave, positionCompound])
    }
  }, [data?.address, txState])

  if (positionToTeleport) {
    return (
      <TeleportForm
        position={positionToTeleport}
        afterTeleportation={() => setPositionToTeleport(undefined)}
      />
    )
  }


  return (
    <Box maxWidth="800px" margin="2rem auto">
      <h1 className={styles.title}>
        Select a position to <br />
        teleport in minutes.
        <img
          src="/fancy1.png"
          width="300px"
          height="140px"
          className={styles.titleImg}
        />
      </h1>
      <Box mb="4">
        Enjoy lower borrowing rates in the chain you desire.
        Each position is teleported individaully.
      </Box>

      {positions.map(p => (
        <PositionItem
          key={JSON.stringify(p)}
          onClick={() => setPositionToTeleport(p)}
          position={p}
        />
      ))}
    </Box>
  )
}
