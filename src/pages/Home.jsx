import { Grid } from '@mui/material'
import React from 'react'
import Button from '../components/Button'
import RadioButton from '../components/RadioButton'
import SelectBox from '../components/SelectBox'
import '../styles/Home.css'
import DatePickerComp from '../components/DatePickerComp'
import dayjs from 'dayjs'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

const port_list = {
  'destinations': [
    { value: 'ATL', label: 'Atlanta' },
    { value: 'DEN', label: 'Denver Airport' },
    { value: 'LAX', label: 'Los Angeles' },
    { value: 'ORD', label: 'Chicago' },
    { value: 'DFW', label: 'Dallas' },
    { value: 'JFK', label: 'New York' },
  ],
  'origins': [
    { value: 'ATL', label: 'Atlanta' },
    { value: 'DEN', label: 'Denver Airport' },
    { value: 'LAX', label: 'Los Angeles' },
    { value: 'ORD', label: 'Chicago' },
    { value: 'DFW', label: 'Dallas' }
  ]
}
function Home() {
  const [tripType, setTripType] = React.useState('OW')
  const [origin, setOrigin] = React.useState("")
  const [destination, setDestination] = React.useState("")
  const [departureDate, setDepartureDate] = React.useState(dayjs("2021-01-01"))
  const [warning, setWarning] = React.useState("")

  React.useEffect(() => {
    setWarning("")
  }, [origin, destination])

  return (
    <div className='content'>
      <Grid container spacing={2}>
        <Grid item xs={4}/>
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
                options={port_list.origins}
                onChange={(org) => setOrigin(org)}
                selectedOption={origin}
              />

            </Grid>
            <Grid item xs={1}>
              <div className='circle-arrow'
                onClick={() => {

                  if(port_list.origins.find((origin) => origin.value === destination.value) && port_list.destinations.find((destination) => destination.value === origin.value)){
                    setOrigin(destination)
                    setDestination(origin)
                    const arrow = document.querySelector('.circle-arrow')
                    arrow.classList.toggle('rotate-arrow')
                  }
                  else if(origin.label === "" || origin === "") {
                    setWarning("Please select an origin.")
                  }
                  else if(destination.label === "" || destination === ""){
                    setWarning("Please select a destination.")
                  }
                  else{
                    setWarning("This destination cannot be used as an origin.")
                  }
                }}
              >
                <SwapHorizIcon/>
              </div>
            </Grid>

            <Grid item xs={4}>
              <SelectBox
                id='select1'
                className='select'
                placeholder='Select Destination...'
                options={port_list.destinations}
                onChange={(dest) => setDestination(dest)}
                selectedOption={destination}
              />
            </Grid>
            <Grid item xs={3}>
              <DatePickerComp 
                value={departureDate}
                onChange={(date) => setDepartureDate(date)}
              />
            </Grid>
            <Grid item xs={9}>
              <p className='warning'>{warning}</p>
            </Grid>
            <Grid item xs={3}>
              <Button
                id='btn1'
                className='btn'
                color='primary'
                title='Search'
                onClick={() =>{
                   console.log('Search button clicked')
                   console.log(origin)
                   console.log(destination)
                   console.log(departureDate.format('YYYY-MM-DD'))
                  }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}/>
      </Grid>



    </div>
  )
}

export default Home
