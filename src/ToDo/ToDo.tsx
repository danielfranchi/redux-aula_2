import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';


const ToDo = () => {

  const dispatch = useDispatch()

  const array = useSelector((state: any) => state.toDo.toDo)

  const busca = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(resposta => dispatch({ type: 'GET_To_Do', payload: resposta.data}))
  }
    
  return(
    <div>
      <div>
        <button onClick={busca}>Posts</button>
      </div>

      <ul>
        {array.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default ToDo
