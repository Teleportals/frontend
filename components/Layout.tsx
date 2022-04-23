import Link from "next/link"
import Footer from "./Footer"
import { Box, Flex } from "reflexbox"
import styles from "./Layout.module.css"

export default function Layout({ children }) {
  return (
    <>
      <Flex>
        <div className={styles.left}>
          <nav>
            <div className={styles.logo}>Lorem ipsum</div>
            <Link href="/teleport">
              <a className={styles.link}>Teleport</a>
            </Link>
            <Link href="/pending">
              <a className={styles.link}>Pending</a>
            </Link>
          </nav>
        </div>

        <main className={styles.right}>
          <Flex justifyContent="flex-end">
            <Box pr="2">
              <select className={styles.select}>
                <option value="eth" selected>
                  Eth
                </option>
              </select>
            </Box>
            <div className={styles.select}>0x524...6233</div>
          </Flex>
          {children}
        </main>
      </Flex>

      <Footer />
    </>
  )
}
