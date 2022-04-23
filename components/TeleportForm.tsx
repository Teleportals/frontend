import { Position } from "../types/Position.d"

interface Props {
  position: Position
}

export default function TeleportForm({ position }: Props) {
  return (
    <p>
      TeleportForm
      <pre>{JSON.stringify(position, null, 2)}</pre>
    </p>
  )
}
