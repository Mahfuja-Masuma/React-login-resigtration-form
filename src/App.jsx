
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Registration } from './pages/Registration'
import { Login } from './pages/Login'

function App() {


  return (
  <div>
   <Routes>
    <Route path='/' element={<Registration/>} />
    <Route path='/login' element={<Login/>} />

   </Routes>
  </div>
  )
}

export default App
