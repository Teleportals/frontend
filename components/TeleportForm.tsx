import Image from "next/image"
import { Box, Flex } from "reflexbox"
import { Position } from "../types/Position.d"
import styles from "./TeleportForm.module.css"
import { Step, StepLabel, Stepper } from "@material-ui/core"
import { useState } from "react"
import "animate.css"
import { Player } from "@lottiefiles/react-lottie-player"
import lottieEther from "../assets/lottie-ether.json"

interface Props {
  position: Position
}

const steps = [
  "Choose target chain",
  "Wait for acceptation",
  "Wait for confirmation",
]

export default function TeleportForm({ position }: Props) {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <>
      {/* {activeStep > 0 && (
        <button onClick={() => setActiveStep(activeStep - 1)}>Prev</button>
      )} */}
      {activeStep < steps.length && (
        <button onClick={() => setActiveStep(activeStep + 1)}>Next</button>
      )}
      <div className={styles.container}>
        <Box width={0.6} margin="auto">
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        {/* <Image src="/background_teleport.png" layout="fill" style={{zIndex: 0}}/> */}

        {activeStep === 0 && (
          <>
            <div className={styles.information}>
              <details className={styles.details}>
                <summary>
                  <Flex width={1}>
                    <Flex width={1}>
                      <Box mr="4">
                        <Image
                          src="/flyingLoan.png"
                          width="80px"
                          height="40px"
                        />
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
                            <div className={styles.numericLabel}>
                              0.0001 Ether
                            </div>
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
                  <li>Transaction Fee on Ethereum</li>
                  <li>Bridging Fee using Connext</li>
                  <li>Service Fee using Floan</li>
                </ul>
              </details>
            </div>

            <Flex>
              <Box width={0.5} p="4">
                <div className={styles.formTitle}>Position to teleport</div>
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
                <div className={styles.formTitle}>Target position</div>
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
          </>
        )}

        {activeStep === 1 && (
          <Box
            mt="4"
            textAlign="center"
            className={styles.title + " animate__animated animate__fadeIn"}
          >
            Waiting for the Tx to be picked up in the mempool…
            <Player
              autoplay
              loop
              src={lottieEther}
              style={{ height: "300px", width: "300px" }}
            />
          </Box>
        )}

        {activeStep === 2 && (
          <Box
            mt="4"
            textAlign="center"
            className="animate__animated animate__fadeIn"
          >
            <div className={styles.title}>Teleporting in progress..</div>
            {/* TODO: Chain */}
            <p>Waiting for the Tx to be confirmed on Optimism.</p>
            <Player
              autoplay
              loop
              src={lottieEther}
              style={{ height: "300px", width: "300px" }}
            />
            <p>
              Tx on chain1:{" "}
              <a className={styles.link} href="#">
                0x96…326f3bd81d6f64da8b0fe3d79
              </a>
            </p>
          </Box>
        )}

        {activeStep === 3 && (
          <Box
            mt="4"
            textAlign="center"
            className="animate__animated animate__fadeIn"
          >
            <div className={styles.title}>Success !</div>
            {/* TODO: Chain */}
            <p>Your position has successfully been teleported to Optimism.</p>
            <Box mb="4" mt="4">
              <Image src="/success.png" width="200px" height="200px" />
            </Box>
            <p>
              Tx on chain1:{" "}
              <a className={styles.link} href="#">
                0x96…326f3bd81d6f64da8b0fe3d79
              </a>
            </p>
            <p>
              Tx on chain2:{" "}
              <a className={styles.link} href="#">
                0x96…326f3bd81d6f64da8b0fe3d79
              </a>
            </p>
          </Box>
        )}
      </div>
    </>
  )
}
