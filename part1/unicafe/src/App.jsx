import { useState } from 'react'

//create button component
const Button = ({ onClick, text }) => 
  <button onClick={onClick}>{text}</button>

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <tr>
        <td>No feedback given</td>
      </tr>
    )
  }
  
  return (
    <>
      <StatisticLine text = 'good' value = {props.good} />
      <StatisticLine text = 'neutral' value = {props.neutral} />
      <StatisticLine text = 'bad' value = {props.bad} />
      <StatisticLine text = 'total' value = {props.total} />
      <StatisticLine text = 'average' value = {props.average} />
      <StatisticLine text = 'positive' value = {props.positive} />
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [rating, setRating] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })
  // count total clicks
  const [total, setTotal] = useState(0)

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

  const average = (good, bad, total) => {
    return (good + (bad * - 1))/total
  }

  const positivePercent = (good, total) => {
    return (good/total)*100 + '%'
  }

  return (
    <>
      <div>
        <h1>give feedback</h1>
        <Button onClick={handleGood} text='good' />
        <Button onClick={handleNeutral} text='neutral' />
        <Button onClick={handleBad} text='bad' />
      </div>
      <table>
        <caption>statistics</caption>
        <thead>
        <Statistics
          good={rating.good}
          neutral={rating.neutral}
          bad={rating.bad}
          total={total}
          average={average(rating.good, rating.bad, total)}
          positive={positivePercent(rating.good, total)} />
        </thead>
      </table>
    </>
  )
}

export default App