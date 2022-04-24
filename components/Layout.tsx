import Popup from "reactjs-popup"
import Link from "next/link"
import Footer from "./Footer"
import { Box, Flex } from "reflexbox"
import { useAccount, useConnect } from "wagmi"
import EthAddress from "./EthAddress"
import styles from "./Layout.module.css"
import "reactjs-popup/dist/index.css"
import Image from "next/image"

export default function Layout({ children }: any) {
  const [{ data, error, loading }, disconnect] = useAccount({})
  const [{ data: cdata, error: cerror }, connect] = useConnect()

  return (
    <>
      <Flex>
        <div className={styles.left}>
          <nav>
            {/* <div className={styles.logo}>FLOANS</div> */}
            <Box mb="4" textAlign="center">
              <Image src="/logo.png" width="130px" height="50px" />
            </Box>
            <Link href="/teleportation">
              <a className={styles.link} style={{ backgroundColor: "#9ABBFF" }}>
                <Flex alignItems="center" justifyContent="space-around">
                  <Box>
                    <Image src="/positions.png" width="17px" height="15px" style={{ marginRight: "8px" }} />
                  </Box>
                  <Box>
                    Teleport
                  </Box>
                </Flex>
              </a>
            </Link>
            <Link href="/pending">
              <a className={styles.link}>
                <Flex alignItems="center" justifyContent="space-around">
                  <Box>
                    <Image src="/teleportations.png" width="20px" height="18px" style={{ marginRight: "8px" }} />
                  </Box>
                  <Box>
                    Pending
                  </Box>
                </Flex>
              </a>
            </Link>
          </nav>
        </div>

        <main className={styles.right}>
          <Flex justifyContent="flex-end" mb="3">
            {data ? (
              <>
                <Box pr="2">
                  <select className={styles.select} defaultValue="rinkeby">
                    <option value="rinkeby">Rinkeby</option>
                    <option value="kovan">Kovan</option>
                  </select>
                </Box>
                <div className={styles.select}>
                  <EthAddress address={data.address} />
                </div>
              </>
            ) : (
              <details>
                <summary className={styles.select}>Connect</summary>
                <ul className={styles.dropdown}>
                  {cdata.connectors.map(connector => (
                    <li key={connector.id}>
                      <button
                        disabled={!connector.ready}
                        key={connector.id}
                        onClick={() => connect(connector)}
                      >
                        {connector.name}
                        {!connector.ready && " (unsupported)"}
                      </button>
                    </li>
                  ))}
                </ul>
                {cerror && <div>{cerror?.message ?? "Failed to connect"}</div>}
              </details>
            )}
          </Flex>
          {children}
        </main>
      </Flex>

      <Footer />
    </>
  )
}
