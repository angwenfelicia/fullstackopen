import { useState } from 'react'

//create button component
const Button = ({ onClick, text }) => 
  <button onClick={onClick}>{text}</button>


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // count total clicks
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGood = () => {
    const updatedGood = good + 1
    setGood(good + 1)
    setTotal(updatedGood + neutral + bad)
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(neutral + 1)
    setTotal(good + updatedNeutral + bad)
  }

  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(bad + 1)
    setTotal(good + neutral + updatedBad)
  }


  return (
    <>
      <div>
        <h1>give feedback</h1>
        <Button onClick={handleGood} text='good' />
        <Button onClick={handleNeutral} text='neutral' />
        <Button onClick={handleBad} text='bad' />
      </div>
      <div>
        <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total}</p>
        <p>average {(good + (bad * -1))/total}</p>
        <p>positive {(good/total)*100}%</p>
      </div>
    </>
  )
}

export default App