import { Box, Flex } from "reflexbox"
import styles from "./Position.module.css"
import { MouseEventHandler } from "react"
import { Position } from "../types/Position"

interface Props {
  onClick: MouseEventHandler
  position: Position
}

export default function PositionItem({ onClick, position }: Props) {
  return (
    <div className={styles.container} onClick={onClick}>
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
