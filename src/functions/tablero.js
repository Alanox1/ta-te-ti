import { COMBOS_GANADORES } from "../variables/constants"
export const revisarGanador = (tableroAChekear) => {
    for(const combo of COMBOS_GANADORES){
     const [a,b,c] = combo
     if(tableroAChekear[a] &&
        tableroAChekear[a] === tableroAChekear[b] &&
        tableroAChekear[a] === tableroAChekear[c]) {
         return tableroAChekear[a]
        }
    }
    return null
  }