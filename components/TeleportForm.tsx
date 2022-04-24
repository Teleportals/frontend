import Image from "next/image";
import { Box, Flex } from "reflexbox";
import { Position } from "../types/Position.d";
import styles from "./TeleportForm.module.css";
import { MouseEventHandler } from "react";
import { on } from "events";
import { Step, StepLabel, Stepper } from "@material-ui/core"


interface Props {
  position: Position;
}

const steps = ["Choose target chain", "Acceptation", "Confirmation"]

export default function TeleportForm({ position }: Props) {
  return (
    <div className={styles.container}>
      <Stepper activeStep={0} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {/* <Image src="/background_teleport.png" layout="fill" style={{zIndex: 0}}/> */}
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
                    <Box width={0.5}>
                      <div>Collateral</div>
                      <div className={styles.numericLabel}>1 Ether</div>
                    </Box>
                    <Box width={0.5}>
                      <div>Debt</div>
                      <div className={styles.numericLabel}>1 Ether</div>
                    </Box>
                  </Flex>
                  <Flex justifyContent="space-between" mt="4">
                    <Box width={0.5}>
                      <div>Estimated fees</div>
                        <div className={styles.numericLabel}>0.0001 Ether</div>
                    </Box>
                    <Box width={0.5}>
                      <Flex alignItems="center">
                        View fees composition
                        <Box ml="4">
                          <Image
                            className={styles.arrowImage}
                            src="/arrowDown.svg"
                            width="28px"
                            height="46px"
                          />
                        </Box>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          </summary>
          
            <ul className={styles.feeItems}>
              <li>
                Transaction Fee on Ethereum
              </li>
              <li>
                Bridging Fee using Connext
              </li>
              <li>
                Service Fee using Floan
              </li>
            </ul>
        </details>
      </div>

      <Flex>
        <Box width={0.5} p="4">
          <div className={styles.title}>Position to teleport</div>
          <form action="">
            <label htmlFor="chain" className={styles.label}>
              Chain
            </label>
            <select
              name="chain"
              className={styles.select}
              defaultValue="rinkeby"
              disabled
            >
              <option value="rinkeby">Rinkeby</option>
              <option value="kovan">Kovan</option>
            </select>

            <label htmlFor="protocol" className={styles.label}>
              Protocol
            </label>
            <select
              name="protocol"
              className={styles.select}
              defaultValue="aave"
              disabled
            >
              <option value="aave">Aave</option>
              <option value="makerdao">MakerDao</option>
            </select>
          </form>
        </Box>

        <Box width={0.5} p="4">
          <div className={styles.title}>Target position</div>
          <form action="">
            <label htmlFor="chain" className={styles.label}>
              Chain
            </label>
            <select
              name="chain"
              className={styles.select}
              defaultValue="rinkeby"
            >
              <option value="rinkeby">Rinkeby</option>
              <option value="kovan">Kovan</option>
            </select>

            <label htmlFor="protocol" className={styles.label}>
              Protocol
            </label>
            <select
              name="protocol"
              className={styles.select}
              defaultValue="aave"
            >
              <option value="aave">Aave</option>
              <option value="makerdao">MakerDao</option>
            </select>
          </form>
        </Box>
      </Flex>
      <Flex justifyContent="center" w={1}>
        <button className={styles.button}>Teleport</button>
      </Flex>
    </div>
  );
}
