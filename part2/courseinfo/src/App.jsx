//exercise part 2.4 in progress
//const Header = (props) => <h2>{props.courses.name}</h2>

const Header = (props) => {
  const headerName = props.courses.map( x => 
    x.name
  )

  console.log(headerName)
  return (
      <h2>{headerName}</h2>
  )
}


//map the parts
const Content = (props) => {
  console.log(props)

  const mapParts = props.courses.parts.map( x =>
    <li key={x.id}>
      <Part part={x} />
    </li>
  )

  // reduce using accumulator and currentValue of exercises
  const total = props.courses.parts.reduce((a, v) => 
    a + v.exercises, 0
  )
  
  return (
    <div>
      {mapParts}
      <b>total of {total} exercises </b>
    </div>
  )
}

//each lists contains name and number of exercises
const Part = (props) => (
  <ul> 
    {props.part.name} {props.part.exercises}
  </ul>
)

const Course = (props) => {
  const { courses } = props
  return (
    <div>
      <h1>Web development curriculum</h1>
      <Header courses={courses} />
      <p>next item</p>
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={courses} />
}

export default App
