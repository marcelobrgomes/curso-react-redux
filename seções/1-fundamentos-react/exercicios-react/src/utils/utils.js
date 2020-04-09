import React from 'react'

export function filhosComProps(props) {
    return React.Children.map(props.children, membro => {
        return React.cloneElement(membro, {...props})
    })
}