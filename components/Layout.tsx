import Link from "next/link"
import Footer from "./Footer"
import { Flex } from "reflexbox"
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

        <main className={styles.right}>{children}</main>
      </Flex>

      <Footer />
    </>
  )
}
