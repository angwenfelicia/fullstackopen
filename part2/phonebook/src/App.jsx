// exercise 2.6 in progress
// show initial list, input name, add to existing list

import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName}
                       onChange={handleChange}/>
        </div>
        <div>debug: {newName}</div>
        <div>
          <button type="submit" onClick={() => {
            setPersons([
              ...persons,
              { id: String(persons.length + 1), name: newName}
            ])
          } } >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
          {persons.map(person => (
            <li key={person.id}>{person.name}</li>
          ))}
      </ul>
    </div>
  )
}

export default App