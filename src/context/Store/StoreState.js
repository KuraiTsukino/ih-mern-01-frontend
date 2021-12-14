// Estado global o Store. Todos los componentes van a tener acceso a la información del estado global.
// La arquitectura no cambia, siempre es así, se le conoce como Flux. Está basada en 4 acciones.
// Su arquitectura es específica, arquitectura de Flux.

import { useReducer } from "react";
import StoreContext from "./StoreContext";
import StoreReducer from "./StoreReducer";

const StoreState = (props) => {

    // Generar el estado global de las guitarrras, todo lo que tiene que ver con guitarras
    // 1a sección. Initial State o Estado inicial. Esto lo mandaremos en todos los componentes
    const initialState = {
        stores: [],
        hola: "Mundo"
    }

    // 2a sección. Configuración de Reducer y creación de estado global.
    const [globalState, dispatch] = useReducer(StoreReducer, initialState)

    // 3a sección. Funciones de cambio en estado global.
    const changeText = () => {
        
        dispatch({ // Objeto conocido como action
            type: "CHANGE_TEXT",
            payload: "Estoy aprendiendo Context sin morir"
        })
    }
    // 4. Retorno.
    return (
        // Se necesita un proovedor para que de el acceso a los componentes al estado inicial de guitarras.
        <StoreContext.Provider
            value={{
                guitars: globalState.stores,
                hola: globalState.hola,
                changeText
            }}
        >
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreState