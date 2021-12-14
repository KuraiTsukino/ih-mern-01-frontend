// Estado global o Store. Todos los componentes van a tener acceso a la información del estado global.
// La arquitectura no cambia, siempre es así, se le conoce como Flux. Está basada en 4 acciones.
// Su arquitectura es específica, arquitectura de Flux.

import { useReducer } from "react";
import GuitarContext from "./GuitarContext";
import GuitarReducer from './GuitarReducer'

const GuitarState = (props) => {

    // Generar el estado global de las guitarrras, todo lo que tiene que ver con guitarras
    // 1a sección. Initial State o Estado inicial. Esto lo mandaremos en todos los componentes através del value del guitarContext.provider
    const initialState = {
        guitars: [],
        hola: "Mundo"
    }

    // 2a sección. Configuración de Reducer y creación de estado global.
    // Reducers son funciones que alteran el estado global.
    // El dispatch es un asistente, una acción que manda los datos a la función del Reducir, éste va a alterar el dato
    const [globalState, dispatch] = useReducer(GuitarReducer, initialState)

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
        <GuitarContext.Provider
            value={{
                guitars: globalState.guitars,
                hola: globalState.hola,
                changeText
            }}
        >
            {props.children} {/* Representación de todos los componentes, parecido a un Outlet en un estado global */}
        </GuitarContext.Provider>
    )

}

export default GuitarState