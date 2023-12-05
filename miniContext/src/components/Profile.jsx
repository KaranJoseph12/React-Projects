import React,{useContext} from 'react'
import UserContext from '../context/UserContext'


const Profile = () => {

  const {user} = useContext(UserContext)
  if(!user) return <div> please log in</div>

  return <div>Welcome {user.username} and your Password is {user.password}</div>
}

export default Profile