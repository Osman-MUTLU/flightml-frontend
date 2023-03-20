import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers-pro';
import { makeStyles, TextField } from '@mui/material';
import dayjs from 'dayjs';
import '../styles/DatePickerComp.css'




function DatePickerComp(props) {
  const { onChange, value } = props
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      
        <DatePicker 
          value={value}
          className='date-picker'
          onChange={onChange}
          defaultValue={dayjs("2021-01-01")}
          maxDate={dayjs("2021-12-31")}
          minDate={dayjs("2021-01-01")}
          renderInput={(params) => <TextField {...params} />}
          sx={{
            '& .MuiInputBase-root': {
              color: 'white',
              backgroundColor: 'white',
              border : 'none',
              borderRadius: '0px',
              
              width: '100%',
              height: '100%',
              padding: '9px',
              fontSize: '16px',
              '&:hover': {
                backgroundColor: 'white',
                border : 'none',
              },
              '&:focus': {
                backgroundColor: 'white',
                border : 'none',
              },
            },
            '& .MuiInputBase-input': {
              color: 'black',
              backgroundColor: 'white',
              border : 'none',
              borderRadius: '5px',
              width: '100%',
              height: '100%',
              padding: '10px',
              fontSize: '16px',
              '&:hover': {
                backgroundColor: 'white',
                border : 'none',
              },
              '&:focus': {
                backgroundColor: 'white',
                border : 'none',
              },
            },
            '& .MuiInputBase-input::placeholder': {
              color: 'black',
              backgroundColor: 'white',
              border : 'none',
              borderRadius: '5px',
              width: '100%',
              height: '100%',
              padding: '10px',
              fontSize: '16px',
              '&:hover': {
                backgroundColor: 'white',
                border : 'none',
              },
              '&:focus': {
                backgroundColor: 'white',
                border : 'none',
              },
            },

          }}
        />
        
      </LocalizationProvider>
    </div>
  )
}

export default DatePickerComp