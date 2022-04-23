import { Box, Flex } from "reflexbox"
import styles from "./Position.module.css"

export default function Position() {
  return (
    <div className={styles.container}>
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <div className={styles.chainName}>Ethereum</div>
          <div>Aave</div>
        </Box>
        <Box>
          <div className={styles.label}>Collateral</div>
          <div className={styles.value}>1 ETH</div>
        </Box>
        <Box>
          <div className={styles.label}>Borrowed</div>
          <div className={styles.value}>0.6 ETH</div>
        </Box>
      </Flex>
    </div>
  )
}
