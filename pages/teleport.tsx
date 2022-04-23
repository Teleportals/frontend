import Position from "../components/Position"
import styles from "./teleport.module.css"

function Teleport() {
  return (
    <div>
      <h1 className={styles.title}>Select a position to teleport</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic minus
        velit id dicta libero vel autem praesentium tenetur quia.
      </p>

      <Position />
      <Position />
      <Position />
    </div>
  )
}

export default Teleport
