import Square from './Square'

export default function GanadorModal ({ winner, resetearJuego }) {
  if (winner === null) return null

  const resultado = winner === false ? 'Empate' : 'Ganador'
  return (
    <section className='ganador'>
      <div className='text'>
        <h2>
          {resultado}
        </h2>

        <header className='win'>
          {winner && <Square>{winner}</Square>}
        </header>

        <footer>
          <button onClick={resetearJuego}>Empezar de nuevo</button>
        </footer>
      </div>

    </section>
  )
}
