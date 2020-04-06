import ReactDOM from 'react-dom'
import React from 'react'
import PrimeiroComponente from './componentes/PrimeiroComponente'
import {CompA, CompB as B} from './componentes/DoisComponentes'


const elemento = document.getElementById("root")

ReactDOM.render(
    <div>
        <PrimeiroComponente valor="Testando..."/>
        <CompA valor="Olá"/>
        <B valor="Fulano"/>

    </div>
, elemento)