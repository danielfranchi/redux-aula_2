import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'

const User  = () => {

  const dispatch = useDispatch()

  const name = useSelector((state: any) => state.user.user.name)
  const userName = useSelector((state: any) => state.user.user.username)
  const email = useSelector((state: any) => state.user.user.email)

  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then(resposta => dispatch({ type: "GET_USER", payload: resposta.data}))
  }, [dispatch])

  return (
    <div>
      <p>{name}</p>
      <p>{userName}</p>
      <p>{email}</p>
    </div>
  );
}

export default User;
