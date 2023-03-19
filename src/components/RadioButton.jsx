import React from 'react'
import '../styles/RadioButton.css'

function RadioButton(props) {
  const { options, onChange, value } = props
  return (
    <div className='radio-buttons'>
      {options.map((option) => (
        <div key={option.value}className='radio-buttons__item'>
          <input
            type='radio'
            style={{ width: '20px', height: '20px'}}
            id={option.value}
            name={option.value}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>

  )
}

export default RadioButton