import { useEffect, useState } from "react"
import { useAccount, useContract } from "wagmi"
import { PROVIDER_ABI } from "../globals/abis"
import { AAVE_PROVIDER_ADDR, COMPOUND_PROVIDER_ADDR } from "../globals/addresses"
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

  const providerCompound = useContract({
    addressOrName: COMPOUND_PROVIDER_ADDR,
    contractInterface: PROVIDER_ABI,
    signerOrProvider: providerKovan,
  });

  useEffect(() => {
    async function fetch() {
      const balancesAave = await providerAave.getPairBalances(
        tokensRinkeby.WBTC.address,
        tokensRinkeby.USDC.address,
        data.address,
      );
      const positionAave = {
        collateral: balancesAave.collateral,
        debt: balancesAave.debt,
        chain: 'Rinkeby',
        protocol: 'Aave',
      };
      const balancesCompound = await providerCompound.getPairBalances(
        tokensKovan.WBTC.address,
        tokensKovan.USDC.address,
        data.address,
      );
      const positionCompound = {
        collateral: balancesCompound.collateral,
        debt: balancesCompound.debt,
        chain: 'Kovan',
        protocol: 'Compound',
      };
      setPositions([positionAave, positionCompound]);
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
