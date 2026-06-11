import { useState } from 'react'

//create button component
const Button = ({ onClick, text }) => 
  <button onClick={onClick}>{text}</button>


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
  // to-do: store total in new component
  const handleGood = () => {
    const newRating = {
      ...rating,
      good: rating.good + 1
    }
    setRating(newRating)
    setTotal(updatedGood + neutral + bad)
  }

  const handleNeutral = () => {
    const newRating = {
      ...rating,
      neutral: rating.neutral + 1
    }
    setRating(newRating)
    console.log(rating.good)
    setTotal(good + updatedNeutral + bad)
  }

  const handleBad = () => {
    const newRating = {
      ...rating,
      bad: rating.bad + 1
    }
    setRating(newRating)
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
        <p>good {rating.good}</p>
        <p>neutral {rating.neutral}</p>
        <p>bad {rating.bad}</p>
        <p>all {total}</p>
        <p>average {(good + (bad * -1))/total}</p>
        <p>positive {(good/total)*100}%</p>
      </div>
    </>
  )
}

export default App