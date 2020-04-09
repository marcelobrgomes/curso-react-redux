import React, {Component} from 'react'

export default class Contador extends Component {
    state = {
        numero: 0
    }
    
    maisUm = () => {
        this.alterarNumero(1)
    }
    
    menosUm = () => {
        this.alterarNumero(-1)
    }

    alterarNumero = diferenca => {
        this.setState({numero: this.state.numero + diferenca})
    }

    render() {
        return (
            <div>
                <h1>Número: {this.state.numero}</h1>
                <button onClick={this.maisUm}>+1</button>
                <button onClick={this.menosUm}>-1</button>
                <button onClick={() => this.alterarNumero(10)}>+10</button>
                <button onClick={() => this.alterarNumero(-10)}>-10</button>
            </div>
        )
    }
}