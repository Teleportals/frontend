import Link from "next/link"
import Footer from "./Footer"
import { Box, Flex } from "reflexbox"
import styles from "./Layout.module.css"
import { useAccount, useConnect } from "wagmi"
import EthAddress from "./EthAddress"

export default function Layout({ children }) {
  const [{ data, error, loading }, disconnect] = useAccount({})
  const [{ data: cdata, error: cerror }, connect] = useConnect()

  console.log({ data, error, loading })

  return (
    <>
      <Flex>
        <div className={styles.left}>
          <nav>
            <div className={styles.logo}>FLOANS</div>
            <Link href="/teleport">
              <a className={styles.link} style={{ backgroundColor: "#9ABBFF" }}>
                Teleport
              </a>
            </Link>
            <Link href="/pending">
              <a className={styles.link}>Pending</a>
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
              <button
                // disabled={!cdata.connectors[0].ready}
                onClick={() => connect(cdata.connectors[0])}
                className={styles.select}
              >
                Connect
              </button>
            )}
          </Flex>
          {children}
        </main>
      </Flex>

      <Footer />
    </>
  )
}
