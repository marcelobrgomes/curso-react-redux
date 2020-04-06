import ReactDOM from 'react-dom'
import React from 'react'
import MultiplosElementos from './componentes/MultiplosElementos'
import MultiplosElementosFragment from './componentes/MultiplosElementosFragment'
import MultiplosElementosArray from './componentes/MultiplosElementosArray'

const elemento = document.getElementById("root")

ReactDOM.render(
    <div>
        <MultiplosElementos />
        <MultiplosElementosFragment />
        <MultiplosElementosArray />

    </div>
, elemento)