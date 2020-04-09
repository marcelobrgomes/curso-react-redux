import React from 'react'

const aprovados = ["Fulano", "Beltrano", "Sicrano"]

export default props => {
    const getItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {getItens(aprovados)}
        </ul>
    )
}