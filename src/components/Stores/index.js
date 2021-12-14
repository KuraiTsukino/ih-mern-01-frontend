import React, { useEffect, useContext } from 'react'
import StoreContext from '../../context/Store/StoreContext'

export default function Store() {

    // Estado global.
    const ctx = useContext(StoreContext)

    const { stores, hola, changeText } = ctx

    // Estado local

    return (
        <>
           <p>Listado de tiendas</p> 
           <p>{ hola }</p>

            <button onClick={ () => { changeText() }}>
                Cambiar texto
            </button>
        </>
    )
}
