//exercise 2.2 in progress
//to-do:  move the Total component inside Content
//
const Header = (props) => <h1>{props.course.name}</h1>

//map the parts
const Content = (props) => {
  const mapParts = props.course.parts.map( x =>
    <li>
      <Part key={x.id} part={x} />
    </li>
  )
  
  return <div>{mapParts}</div>
}

//each lists contains name and number of exercises
const Part = (props) => (
  <ul> 
    {props.part.name} {props.part.exercises}
  </ul>
)

//calculate sum using reduce
//to-do: try implementing useState in initialValue
//use map again then reduce
const Total = (props) => {
  const initialValue = 0
  /*const sumInitial = props.parts.reduce(
    (accumulator, currentValue) => accumulator, currentValue, initialValue
  )*/

}

const Course = (props) => {
  const { course } = props
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App
