import React, {useState} from 'react'

export default props => {
    const [contador, setContador] = useState(props.valorInicial)

    return (
        <div>
            <h1>Número {contador}</h1>
            <button onClick={() => setContador(contador+1)}>+1</button>
            <button onClick={() => setContador(contador-1)}>-1</button>
        </div>
    )
}