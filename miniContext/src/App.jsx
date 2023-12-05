import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
      <h1 style={{color:"white"}}>How have you guys been doing mate</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
