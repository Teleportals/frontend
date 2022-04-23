import { useEffect, useState } from "react"
import { useAccount, useContract } from "wagmi"
//import { ERC20_ABI } from "../globals/abis"
import { tokensRinkeby, tokensKovan } from "../globals/tokens"
import { providerRinkeby, providerKovan } from "../globals/providers"
import Position from "../components/Position"
import styles from "./teleport.module.css"

function Teleport() {
  const [{ data }] = useAccount({})
  const [positions, setPositions] = useState([]);

  //const providerAave = useContract({
    //addressOrName: '',
    //contractInterface: PROVIDER_AAVE_ABI,
    //signerOrProvider: providerRinkeby,
  //});

  //const providerCompound = useContract({
    //addressOrName: '',
    //contractInterface: PROVIDER_COMPOUND_ABI,
    //signerOrProvider: providerKovan,
  //});

  //const contract = useContract({
    //addressOrName: tokensRinkeby.WETH.address,
    //contractInterface: ERC20_ABI,
    //signerOrProvider: providerRinkeby,
  //});

  useEffect(() => {
    async function fetch() {
      // call FloanProviderAave getPairBalances(collAddr, debtAddr, userAddr)
      // call FloanProviderCompound
      // setPositions()
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

      <Position />
      <Position />
      <Position />
    </div>
  )
}

export default Teleport
