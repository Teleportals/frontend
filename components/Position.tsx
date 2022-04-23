import styles from "./Position.module.css"

export default function Position() {
  return (
    <div className={styles.container}>
      <div>Ethereum</div>
      <div>Aave</div>
      <div>Collateral: 1 ETH</div>
      <div>Borrowed: 0.6 ETH</div>
    </div>
  )
}
