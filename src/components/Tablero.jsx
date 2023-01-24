import Square from './Square'
export default function Tablero ({ tablero, actualizarTablero }) {
  return (tablero.map((square, index) => <Square
    key={index}
    index={index}
    actualizarTablero={actualizarTablero}
                                         >
    {square}
                                          </Square> 
  )
  )
}
