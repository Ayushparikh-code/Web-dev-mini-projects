import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState(0)
  const [unit, setUnit] = useState('Second')
  const [second, setSecond] = useState()
  const [minute, setMinute] = useState()
  const [hour, setHour] = useState()
  const [day, setDay] = useState()

  const handleInputChange = (event) => {
    const target = event.target
    setInput(target.value)
  }

  const handleUnitChange = (event) => {
    const target = event.target
    setUnit(target.value)
  }

  useEffect(() => {
    console.log('input : ' + input + ' Unit : ' + unit)
    // Second conversion
    if (unit == 'Second') {
      setSecond(input)
      setMinute(input / 60)
      setHour(input / 3600)
      setDay(input / 86400)
    }
    if (unit == 'Minute') {
      setSecond(input * 60)
      setMinute(input)
      setHour(input / 60)
      setDay(input / 1440)
    }
    if (unit == 'Hour') {
      setSecond(input * 3600)
      setMinute(input * 60)
      setHour(input)
      setDay(input / 24)
    }
    if (unit == 'Day') {
      setSecond(input * 86400)
      setMinute(input * 1440)
      setHour(input * 24)
      setDay(input)
    }
  }, [input, unit])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '10vh'
      }}>
      <div style={{ backgroundColor: 'lightgray', padding: 10 }}>
        <input name="numberOfGuests" value={input} onChange={handleInputChange} />{' '}
        <select id="cars" name="cars" onChange={handleUnitChange}>
          <option value="Second">Second</option>
          <option value="Minute">Minute</option>
          <option value="Hour">Hour</option>
          <option value="Day">Day</option>
        </select>
        <p>Second : {second}</p>
        <p>Minute : {minute}</p>
        <p>Hour : {hour}</p>
        <p>Day : {day}</p>
      </div>
    </div>
  )
}

export default App
