import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import login  from '../../public/animation/login.json'
import Lottie from 'lottie-react'

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [errorEmail, setErrorEmail] = useState("")
  const [errorPassword, setErrorPassword] = useState("")
  const navigate= useNavigate()



  const handleEmailChange = (e) => {
      setEmail(e.target.value)
      setErrorEmail("")
  }


  const handlePasswordChange = (e) => {
      setPassword(e.target.value)
      setErrorPassword("")
  }

  const handleSignUp = (e) => {
      e.preventDefault()
 
      if (!email) {
          setErrorEmail("Please Enter Your Email")
      }
     
      if (!password) {
          setErrorPassword("Please Enter Your Password")
      }

      if (email &&  password) {
          navigate("/")
      }
  }

  return (
    <div className="container flex justify-between items-center">
    <div className="w-full md:w-[40%]">
        <Lottie animationData={login} className='w-full'/>
    </div>
    <div className="w-[40%] items-center">
        <h1 className='text-center text-3xl font-bold text-green-500'>Registration Here</h1>
        <form>
            <input 
                value={email}
                onChange={handleEmailChange}
                type="text" 
                placeholder='Enter Your Email' 
            />
            <p className='text-red-500'>{errorEmail}</p>
       
            <input 
                value={password}
                onChange={handlePasswordChange}
                type="password" 
                placeholder='Enter Your Password' 
            />
            <p className='text-red-500'>{errorPassword}</p>

            <div className="flex justify-between mt-2">
   <p>Don't have an account?<Link to="/"  className="text-blue-700"> Sign up Here</Link></p>
<Link href="#" className="text-red-600 ">Forgot password</Link>
</div>
            <button onClick={handleSignUp} className='btn'>Sign Up</button>
        </form>
    </div>
</div>
  )
}
