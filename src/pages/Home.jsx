import { Grid } from '@mui/material'
import React from 'react'
import Button from '../components/Button'
import RadioButton from '../components/RadioButton'
import SelectBox from '../components/SelectBox'
import '../styles/Home.css'


function Home() {
  const [tripType, setTripType] = React.useState('OW')
  const [origin, setOrigin] = React.useState('')
  const [destination, setDestination] = React.useState('')

  return (
    <div className='content'>
      <Grid container spacing={2}>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <h1>FlightML</h1>
              <RadioButton
                id='radio1'
                className='radio'
                options={[
                  { value: 'OW', label: 'One-Way' },
                  { value: 'RT', label: 'Round-Trip' },
                ]}
                onChange={(e) => setTripType(e.target.value)}
                value={tripType}
              />
            </Grid>
            <Grid item xs={4}>
              <SelectBox
                id='select1'
                className='select'
                placeholder='Select Origin...'
                options={[
                  { value: 'ATL', label: 'Atlanta' },
                  { value: 'DEN', label: 'Denver Airport' },
                ]}
                onChange={(e) => setOrigin(e.target.value)}
                value={origin}
              />

            </Grid>
            <Grid item xs={1}>
            </Grid>

            <Grid item xs={4}>
              <SelectBox
                id='select1'
                className='select'
                placeholder='Select Destination...'
                options={[
                  { value: 'ATL', label: 'Atlanta' },
                  { value: 'DEN', label: 'Denver Airport' },
                ]}
                onChange={(e) => setDestination(e.target.value)}
                value={destination}
              />
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={2}>
              <Button
                id='btn1'
                className='btn'
                color='primary'
                size='1.5rem'
                title='Search'
                onClick={() => console.log('Search button clicked')}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>



    </div>
  )
}

export default Home
