import '../index.css'
export default function Square ({ children, actualizarTablero, index, isSelected }) {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    actualizarTablero(index)
  }
  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}
