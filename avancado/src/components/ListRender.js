import {useState} from 'react'

const ListRender = () => {
  const [list] = useState(['Matheus', 'Pedro', 'Josias', 'Maria'])

  const [users] = useState([
    {id: 1, name: 'Matheus', age: 31},
    {id: 232324, name: 'Pedro', age: 20},
    {id: 120, name: 'João', age: 45}
  ])
  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListRender
