// to-do
// unicafe step 5 refactor

import { useState } from 'react'

//create button component
const Button = ({ onClick, text }) => 
  <button onClick={onClick}>{text}</button>

const StatisticLine = (props) => {
  
}

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }
  
  return (
    <>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.total}</p>
      <p>average {(props.good + (props.bad * - 1))/props.total}</p>
      <p>positive {(props.good/props.total)*100}%</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [rating, setRating] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })
  // count total clicks
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)

  // refactor using object spread
  const handleGood = () => {
    const newRating = {
      ...rating,
      good: rating.good + 1
    }
    setRating(newRating)
    const updatedGood = rating.good + 1
    setTotal(updatedGood + rating.neutral + rating.bad)
  }

  const handleNeutral = () => {
    const newRating = {
      ...rating,
      neutral: rating.neutral + 1
    }
    setRating(newRating)
    const updatedNeutral = rating.neutral + 1
    setTotal(rating.good + updatedNeutral + rating.bad)
  }

  const handleBad = () => {
    const newRating = {
      ...rating,
      bad: rating.bad + 1
    }
    setRating(newRating)
    const updatedBad = rating.bad + 1
    setTotal(rating.good + rating.neutral + updatedBad)
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
        <Statistics good={rating.good} neutral={rating.neutral} bad={rating.bad} total={total} />
      </div>
    </>
  )
}

export default App