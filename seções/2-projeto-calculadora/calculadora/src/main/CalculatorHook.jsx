import React, {useState} from 'react'
import './Calculator.css'
import Display from '../components/Display';
import Button from '../components/Button';

const initialState = {
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0
}

const initialDisplayValue = '0'

export default props => {
    const [state, setState] = useState({...initialState})
    const [displayValue, setDisplayValue] = useState(initialDisplayValue)
    
    const clearMemory = () => {
        setState({...initialState})
        setDisplayValue(initialDisplayValue)
    }
    
    const setOperation = operation => {
        if(state.current === 0) {
            setState({clearDisplay: true, operation, current: 1, values: state.values})
        } else {
            const equals = operation === '='
            const currentOperation = state.operation
            
            const values = [...state.values]
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch(e) {
                values[0] = state.values[0]
            }
            values[1] = 0
            
            setDisplayValue('' + values[0])
            setState({
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }
    
    const addDigit = n => {
        if(n === '.' && displayValue.includes('.')) {
             return
        }

        const clearDisplay = displayValue === '0' || state.clearDisplay
        const currentValue = clearDisplay ? '' : displayValue
        const currentDisplayValue = currentValue + n

        setDisplayValue(currentDisplayValue)
        setState({
            operation: state.operation,
            current: state.current,
            clearDisplay: false,
            values: state.values
        })
         
        if(n !== '.') {
             const i = state.current
             const newValue = parseFloat(currentDisplayValue)
             const values = [...state.values]
             values[i] = newValue

             setState({
                operation: state.operation,
                current: state.current,
                clearDisplay: false,
                values
            })
        }
    }

    return (
        <div className="calculator">
            <Display value={displayValue} />
            <Button label="AC" click={() => clearMemory()} triple></Button>
            <Button label="/" click={setOperation} operation></Button>
            <Button label="7" click={addDigit}></Button>
            <Button label="8" click={addDigit}></Button>
            <Button label="9" click={addDigit}></Button>
            <Button label="*" click={setOperation} operation></Button>
            <Button label="4" click={addDigit}></Button>
            <Button label="5" click={addDigit}></Button>
            <Button label="6" click={addDigit}></Button>
            <Button label="-" click={setOperation} operation></Button>
            <Button label="1" click={addDigit}></Button>
            <Button label="2" click={addDigit}></Button>
            <Button label="3" click={addDigit}></Button>
            <Button label="+" click={setOperation} operation></Button>
            <Button label="0" click={addDigit} double></Button>
            <Button label="." click={addDigit}></Button>
            <Button label="=" click={setOperation} operation></Button>
        </div>
    )
}