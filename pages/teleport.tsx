import { useEffect, useState } from "react"
import { useAccount, useContract } from "wagmi"
import { PROVIDER_ABI } from "../globals/abis"
import { AAVE_PROVIDER_ADDR } from "../globals/addresses"
import { tokensRinkeby, tokensKovan } from "../globals/tokens"
import { providerRinkeby, providerKovan } from "../globals/providers"
import styles from "./teleport.module.css"
import TeleportForm from "../components/TeleportForm"
import { Position } from "../types/Position.d"
import PositionItem from "../components/PositionItem"

export default function Teleport() {
  const [{ data }] = useAccount({})
  const [positions, setPositions] = useState<Position[]>([])
  const [positionToTeleport, setPositionToTeleport] = useState<Position>()

  const providerAave = useContract({
    addressOrName: AAVE_PROVIDER_ADDR,
    contractInterface: PROVIDER_ABI,
    signerOrProvider: providerRinkeby,
  })

  //const providerCompound = useContract({
  //addressOrName: '',
  //contractInterface: PROVIDER_ABI,
  //signerOrProvider: providerKovan,
  //});

  //const contract = useContract({
  //addressOrName: tokensRinkeby.WETH.address,
  //contractInterface: ERC20_ABI,
  //signerOrProvider: providerRinkeby,
  //});

  useEffect(() => {
    async function fetch() {
      const balances = await providerAave.getPairBalances(
        tokensRinkeby.WETH.address,
        tokensRinkeby.DAI.address,
        data?.address
      )
      const positionAave = {
        collateral: balances.collateral,
        debt: balances.debt,
        chain: "Ethereum",
        protocol: "Aave",
      }
      setPositions([positionAave])
    }
    if (data && data.address) fetch()
  }, [data])

  if (positionToTeleport) {
    return (
      <>
        <button onClick={() => setPositionToTeleport(undefined)}>
          &lt; Back
        </button>
        <TeleportForm position={positionToTeleport} />
      </>
    )
  }

  return (
    <div>
      <button onClick={() => setPositionToTeleport(positions[0])}>Swap</button>
      <h1 className={styles.title}>
        Select a position to teleport in minutes.
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic minus
        velit id dicta libero vel autem praesentium tenetur quia.
      </p>

      {positions.map(p => (
        <PositionItem
          key={JSON.stringify(p)}
          onClick={() => setPositionToTeleport(p)}
          position={p}
        />
      ))}
    </div>
  )
}
