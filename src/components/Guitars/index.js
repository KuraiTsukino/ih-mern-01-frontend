import React, { useEffect, useContext } from 'react'
import GuitarContext from '../../context/Guitar/GuitarContext'

export default function Guitar() {

    // Estado global.
    const ctx = useContext(GuitarContext)

    const { guitars, hola, changeText } = ctx
    // Estado local

    return (
        <>
           <p>Listado de guitarras</p> 
           <p>{ hola }</p>

            <button onClick={ () => { changeText() }}>
                Cambiar texto
            </button>

        </>
    )
}
