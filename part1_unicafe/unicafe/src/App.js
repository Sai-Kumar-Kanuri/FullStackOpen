import { useState } from 'react';
import Heading from './components/Heading';
import Button from './components/Button';
import Statistics from './components/Statistics'
import './App.css';




const App = () => {
  // save clicks of each button to its own state
  // const [good, setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)

  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGood = () => {
    setClicks({ ...clicks, good: clicks.good + 1 })
  }
  const handleNeutral = () => {
    setClicks({ ...clicks, neutral: clicks.neutral + 1 })
  }
  const handleBad = () => {
    setClicks({ ...clicks, bad: clicks.bad + 1 })
  }


  return (
    <div>
      <Heading header='give feedback' />
      <div className='button-row'>
        <Button onClick={handleGood} name='good' />
        <Button onClick={handleNeutral} name='neutral' />
        <Button onClick={handleBad} name='bad' />
      </div>
      <Heading header='statistics' />
      <Statistics clicks={clicks}></Statistics>

    </div>
  )
}

export default App;