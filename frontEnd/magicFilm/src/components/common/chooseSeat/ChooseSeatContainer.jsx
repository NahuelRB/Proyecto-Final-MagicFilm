import { useContext } from "react"
import { ReservationContextReducer } from "../../../context/ReservationContextReducer "
import ChooseSeat from "./ChooseSeat"

const ChooseSeatContainer = () => {
    const {state, dispatch}=useContext(ReservationContextReducer)

    const chairsGlobals = state.chairs

    
    return (
        <div>
            <ChooseSeat 
            chairsGlobals={chairsGlobals}
            dispatch={dispatch}  
            />
        </div>
    )
}

export default ChooseSeatContainer;