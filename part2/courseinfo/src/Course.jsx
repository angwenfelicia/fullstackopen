const Course = (props) => {
    const { courses } = props
    return (
      <div>
        <h1>Web development curriculum</h1>
        <Content courses={courses} />
      </div>
    )
  }

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

export default Course