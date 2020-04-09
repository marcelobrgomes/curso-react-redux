import ReactDOM from 'react-dom'
import React from 'react'
import ContadorHooks from './componentes/ContadorHooks';
// import MultiplosElementos from './componentes/MultiplosElementos'
// import MultiplosElementosFragment from './componentes/MultiplosElementosFragment'
// import MultiplosElementosArray from './componentes/MultiplosElementosArray'
// import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro';
// import ListaAprovados from './componentes/ListaAprovados'
// import Pai from './componentes/Pai';
// import ComponenteClasse from './componentes/ComponenteClasse';

const elemento = document.getElementById("root")

ReactDOM.render(
    <div>
        <ContadorHooks valorInicial={5}/>
    </div>
, elemento)