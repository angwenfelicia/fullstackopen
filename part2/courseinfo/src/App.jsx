//exercise part 2.4 in progress:
//reduce, total still NaN

const Header = (props) => {
  const total = props.courses.reduce((a, v) => 
    a + v.exercises, 0
  )

  const headerName = props.courses.map( x =>
    <div key={x.id}>
      <h2>{x.name}</h2>
      <ul>
        {x.parts.map(part => 
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        )}
      </ul>
      <b>total of {total} exercises</b>
    </div>
  )

  return headerName
}


//map the parts
const Content = (props) => {
  console.log(props)

  const mapParts = props.courses.map( x =>
    <li>{x.name}</li>
  )

  // reduce using accumulator and currentValue of exercises
  // props.course.parts.reduce
  const total = props.courses.reduce((a, v) => 
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
      {/*<Content courses={courses} />*/}
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
