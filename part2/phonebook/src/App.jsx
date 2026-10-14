// exercise 2.6 in progress

import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newName,
      id: String(names.length + 1),
    }

    setNames(names.concat(noteObject))
    setNewame('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const Name = ({ name }) => {
    return <li>{name.content}</li>
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} 
            onChange={handleNameChange} />
        </div>
        <div>debug: {newName}</div>
        <div>
          <button type="submit" onClick={() => addToList(true)}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map( name => (
          <Name key={name.id} name={name} />
        ))}
      </ul>
    </div>
  )
}

export default App