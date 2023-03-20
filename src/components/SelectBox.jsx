import React from 'react'
import "../styles/SelectBox.css"

function SelectBox(props) {
  const { options, onChange, selectedOption, placeholder} = props
  const [isOpen, setIsOpen] = React.useState(false)

  const onChangeHandler = (option) => {
    if(option.label !== '') {
      setIsOpen(true)
    }
    else{
      setIsOpen(false)
    }
    onChange(option)
  }
  
  const findOptionWithLabel = (label) => {
    return options.find(option => option.label === label) || {value: '', label: label}
  }


  return (
    <>
      <div className='select-box'>
        <div className='select-box__selected-value' onClick={() => setIsOpen(!isOpen)}>
            <input
                type='text'
                className='select-box__search'
                placeholder={placeholder}
                value={selectedOption.label? selectedOption.label : ''}
                onChange={(e) => onChangeHandler(findOptionWithLabel(e.target.value))}
              />
          
        </div>
        {isOpen && (
        <div className='select-box__options'>
          
          {options
            .filter((option) => option.label.toLowerCase().includes(selectedOption.label?.toLowerCase() || ''))
            .map((option) => (
              <div
                key={option.value}
                className={`select-box__option ${
                  selectedOption.value === option.value ? 'select-box__option--selected' : ''
                }`}
                onClick={() => {
                  onChange(option)
                  setIsOpen(false)
                }}
              >
                <div className='select-box__option__value'>
                {option.label}
                </div>
              </div>
            ))}
          </div>
      )}
      </div>
    </>



  )
}

export default SelectBox