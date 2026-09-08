//exercise part 2.5 in progress

const Content = (props) => {

  const total = props.courses.reduce(
    (sum, x) => x.parts.reduce((a, v) => a + v.exercises, 0)
  )
  
  return (
    <>
      {props.courses.map(course => (
        <div key={course.id} >
          <h2>{course.name}</h2>
        <ul>
          {course.parts.map(part => (
            <li key={part.id}>
              {part.name} {part.exercises}
            </li>
          ))}
        </ul>
        </div>  
      ))}
      <b>total of {total} exercises </b>
    </>
  )
}

const Course = (props) => {
  const { courses } = props
  return (
    <div>
      <h1>Web development curriculum</h1>
      <Content courses={courses} />
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
