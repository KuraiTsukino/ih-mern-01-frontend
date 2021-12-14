const reducer = (globalState, action) => {

    switch (action.type) {
        
        case "CHANGE_TEXT":
            return {
                ...globalState, // Spread operator, rae las propiedades anteriores, trae todos los valores del estado global y luego te indico cuál es el que quiero reemplazar
                hola: action.payload
            }
        default:
            return globalState
    }
}

export default reducer