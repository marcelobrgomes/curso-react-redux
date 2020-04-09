import React from 'react'
import Filho from './Filho';

export default props => {
    const notificarSaida = (lugar) => {
        alert(`Permitindo sair para o ${lugar}`)
    }

    return (
        <Filho notificarSaida={notificarSaida} lugar="supermercado" />
    )
}
