import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UserForm from './components/UserForm'
import UserList from './components/UserList'

function App() {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  },[])

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  }



  const addUser = newUser => {
    axios.post('https://users-crud1.herokuapp.com/users/', newUser)
      .then(()=>getUsers())
  }

  const deleteUser = id => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(()=>getUsers())
  }

  const selecUser = user => {
    setSelectedUser(user)
  }
  const editUser = userEdited => {
    axios.put(`https://users-crud1.herokuapp.com/users/${userEdited.id}/`, userEdited)
      .then(()=>getUsers())
      setSelectedUser(null)
  }

  return (
    <div className="App">
      <div className="user-form">
      <UserForm
        addUser={addUser}
        selectedUser={selectedUser}
        editUser={editUser}
      />

      </div>
      <div className="user-list">
      <UserList
        users={users}
        deleteUser={deleteUser}
        selectUser={selecUser}
      />

      </div>
    </div>
  )
}

export default App
