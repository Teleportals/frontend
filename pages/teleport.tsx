import { useEffect, useState } from "react"
import { useAccount, useContract } from "wagmi"
import { AAVE_PROVIDER_ABI } from "../globals/abis"
import { AAVE_PROVIDER_ADDR } from "../globals/addresses"
import { tokensRinkeby, tokensKovan } from "../globals/tokens"
import { providerRinkeby, providerKovan } from "../globals/providers"
import Position from "../components/Position"
import styles from "./teleport.module.css"

function Teleport() {
  const [{ data }] = useAccount({})
  const [positions, setPositions] = useState([]);

  const providerAave = useContract({
    addressOrName: AAVE_PROVIDER_ADDR,
    contractInterface: AAVE_PROVIDER_ABI,
    signerOrProvider: providerRinkeby,
  });

  //const providerCompound = useContract({
    //addressOrName: '',
    //contractInterface: COMPOUND_PROVIDER_ABI,
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
        data.address,
      );
      const positionAave = {
        collateral: balances.collateral,
        debt: balances.debt,
        chain: 'Ethereum',
        protocol: 'Aave',
      };
      setPositions([positionAave]);
    }
    if (data && data.address) fetch();
  }, [data]);

  return (
    <div>
      <h1 className={styles.title}>Select a position to teleport</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic minus
        velit id dicta libero vel autem praesentium tenetur quia.
      </p>

      {positions.map(p => (
        <Position />
      ))}
    </div>
  )
}

export default Teleport
