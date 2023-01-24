import '../index.css'
import Square from './Square'
export default function Turnos ({ turno, TURNOS }) {
  return (
    <section className='turno'>
      <Square isSelected={turno === TURNOS.X}>{TURNOS.X}</Square>
      <Square isSelected={turno === TURNOS.O}>{TURNOS.O}</Square>
    </section>
  )
}
