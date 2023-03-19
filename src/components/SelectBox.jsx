import React from 'react'
import "../styles/SelectBox.css"

function SelectBox(props) {
  const { options, onChange, value, placeholder} = props
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedOption, setSelectedOption] = React.useState(options[0])
  const [search, setSearch] = React.useState('')
  const onChangeHandler = (e) => {
    setSearch(e.target.value)
    if(e.target.value !== '') {
      setIsOpen(true)
    }
    else{
      setIsOpen(false)
    }
    onChange(e)
  }
  return (
    <>
      <div className='select-box'>

        <div className='select-box__selected-value' onClick={() => setIsOpen(!isOpen)}>
            <input
                type='text'
                className='select-box__search'
                placeholder={placeholder}
                value={search}
                onChange={onChangeHandler}
              />
          
        </div>
        {isOpen && (
        <div className='select-box__options'>
          
          {options
            .filter((option) => option.label.toLowerCase().includes(search.toLowerCase()))
            .map((option) => (
              <div
                key={option.value}
                className={`select-box__option ${
                  selectedOption.value === option.value ? 'select-box__option--selected' : ''
                }`}
                onClick={() => {
                  setSelectedOption(option)
                  setSearch(option.label)
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