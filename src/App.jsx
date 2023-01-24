import { useState } from 'react'
import './App.css'
import './index.css'
import { TURNOS } from './variables/constants'
import Turnos from './components/Turnos'
import GanadorModal from './components/GanadorModal'
import { revisarGanador } from './functions/tablero'
import Tablero from './components/Tablero'
import { guardarJuegoEnStorage, reinicarJuegoEnStorage } from './logic/storage'

function App () {
  const [turno, setTurno] = useState(() => {
    const turnoDeStorage = window.localStorage.getItem('turno')

    return turnoDeStorage ?? TURNOS.X
  })
  const [tablero, setTablero] = useState(() => {
    const tableroDeStorage = window.localStorage.getItem('tablero')
    return tableroDeStorage ? JSON.parse(tableroDeStorage) : Array(9).fill(null)
  })
  const [ganador, setGanador] = useState(null)

  const checkearFinalDelJuego = (nuevoTablero) => {
    return nuevoTablero.every(square => square != null)
  }

  const actualizarTablero = (index) => {
  // si tiene algo en el cuadrado
    if (tablero[index] || ganador) return

    // actualizar el tablero
    const nuevoTablero = [...tablero]
    nuevoTablero[index] = turno
    setTablero(nuevoTablero)

    // cambiar turno
    const nuevoTurno = turno === TURNOS.X ? TURNOS.O : TURNOS.X
    setTurno(nuevoTurno)
    guardarJuegoEnStorage({
      tablero: nuevoTablero,
      turno: nuevoTurno
    })
    const nuevoGanador = revisarGanador(nuevoTablero)
    if (nuevoGanador) {
      setGanador(nuevoGanador)
    } else if (checkearFinalDelJuego(nuevoTablero)) {
      setGanador(false)
    }
  }

  const resetearJuego = () => {
    setTurno(TURNOS.X)
    setGanador(null)
    setTablero(Array(9).fill(null))
    reinicarJuegoEnStorage()
  }

  return (
    <main className='tablero'>
      <h1>ta-te-ti</h1>
      <section className='juego'>
        <Tablero tablero={tablero} actualizarTablero={actualizarTablero} />
      </section>
      <p className='turnoDe'>Turno de :</p>
      <Turnos turno={turno} TURNOS={TURNOS} />
      <button onClick={resetearJuego}>Resetear el juego</button>
      <GanadorModal winner={ganador} resetearJuego={resetearJuego} />
    </main>
  )
}

export default App
