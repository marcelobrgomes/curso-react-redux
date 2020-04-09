import React from 'react'

export default props =>
    <div>
        <button onClick={() => props.notificarSaida(props.lugar)}>
            Vou sair
        </button>
    </div>