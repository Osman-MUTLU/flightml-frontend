import React from 'react'
import '../styles/Button.css'
function Button(props) {
    const {id,className, color='primary', size, title, onClick} = props
    const colot_sets = {
        primary: 'button-primary',
        secondary: 'button-secondary',
    }
    return (
        <div
            id={id}
            className={'button '+className+' '+colot_sets[color]}
            onClick={onClick}

        >
            {title}
        </div>
    )

}

export default Button