import React from 'react'
import Button from '../components/Button'
import '../styles/Home.css'


function Home() {
  return (
    <div className='content'>
      <Button
        id='btn1'
        className='btn'
        color='primary'
        size='1.5rem'
        title='Primary'
        onClick={() => console.log('Primary button clicked')}
      />
    </div>
  )
}

export default Home
