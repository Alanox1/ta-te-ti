export const guardarJuegoEnStorage = ({tablero,turno}) => {
    localStorage.setItem("tablero",JSON.stringify(tablero))
    localStorage.setItem("turno",turno)
}

export const reinicarJuegoEnStorage = () => {
    
    window.localStorage.removeItem("turno")
    window.localStorage.removeItem("tablero")
}