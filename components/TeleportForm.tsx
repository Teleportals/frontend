import Image from "next/image"
import { Box, Flex } from "reflexbox"
import { Position } from "../types/Position.d"
import styles from "./TeleportForm.module.css"
import { MouseEventHandler } from "react"
import { on } from "events"

interface Props {
  position: Position
}

export default function TeleportForm({ position }: Props) {
  return (
    <div className={styles.container}>
      {/* <Image src="/background_teleport.png" layout="fill" style={{zIndex: 0}}/> */}
      <pre>{JSON.stringify(position, null, 2)}</pre>
      <div className={styles.information}>
        <details className={styles.details}>
          <summary>
          <Flex width={1}>
            <Flex width={1}>
              <Box mr="4">
                <Image src="/flyingLoan.png" width="80px" height="40px" />
              </Box>

              <Box width={1}>
                <Flex justifyContent="space-between">
                  <Box width={.5}>
                    <div>Collateral</div>
                    <div className={styles.numericLabel}>1 Ether</div>
                  </Box>
                  <Box width={.5}>
                    <div>Debt</div>
                    <div className={styles.numericLabel}>1 Ether</div>
                  </Box>
                </Flex>
                <Flex justifyContent="space-between" mt="4">
                  <Box width={.5}>
                    <div>Estimated fees</div>
                    <div className={styles.numericLabel}>0.0001 Ether</div>
                  </Box>
                  <Box width={.5}>
                    <Flex alignItems="center">
                      View fees composition 
                      <Box ml="4">
                          <Image className={styles.arrowImage} src="/arrowDown.svg" width="28px" height="46px"/>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Flex>
          </summary>
            Testest
        </details>
      </div>
    </div>
  )
}
