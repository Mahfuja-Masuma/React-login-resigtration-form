import Lottie from 'lottie-react'
import registration from '../../public/animation/registration.json'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Registration = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    const [errorFullname, setErrorFullname] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPhone, setErrorPhone] = useState("")
    const [errorPassword, setErrorPassword] = useState("")

    const navigate= useNavigate()

    const handleFullNameChange = (e) => {
        setFullName(e.target.value)
        setErrorFullname("")
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        setErrorEmail("")
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
        setErrorPhone("")
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
        setErrorPassword("")
    }

    const handleSignUp = (e) => {
        e.preventDefault()

        if (!fullName) {
            setErrorFullname("Please Enter Your Full Name")
        }
        if (!email) {
            setErrorEmail("Please Enter Your Email")
        }
        if (!phone) {
            setErrorPhone("Please Enter Your Phone")
        }
        if (!password) {
            setErrorPassword("Please Enter Your Password")
        }

        if (fullName && email && phone && password) {
            navigate("/login")
        }
    }

    return (
        <div className="container flex justify-between items-center">
            <div className="w-full md:w-[40%]">
                <Lottie animationData={registration} className='w-full'/>
            </div>
            <div className="w-[40%] items-center">
                <h1 className='text-center text-3xl font-bold text-green-500'>Registration Here</h1>
                <form>
                    <input 
                        value={fullName}
                        onChange={handleFullNameChange}
                        type="text" 
                        placeholder='Enter Your Full Name' 
                    />
                    <p className='text-red-500'>{errorFullname}</p>
                    <input 
                        value={email}
                        onChange={handleEmailChange}
                        type="text" 
                        placeholder='Enter Your Email' 
                    />
                    <p className='text-red-500'>{errorEmail}</p>
                    <input 
                        value={phone}
                        onChange={handlePhoneChange}
                        type="text" 
                        placeholder='Enter Your Phone' 
                    />
                    <p className='text-red-500'>{errorPhone}</p>
                    <input 
                        value={password}
                        onChange={handlePasswordChange}
                        type="password" 
                        placeholder='Enter Your Password' 
                    />
                    <p className='text-red-500'>{errorPassword}</p>

                    <div className="flex justify-between mt-2">
           <p>Have an account?<Link to="/login"  className="text-blue-700"> Login Here</Link></p>
        <Link href="#" className="text-red-600 ">Forgot password</Link>
        </div>
                    <button onClick={handleSignUp} className='btn'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}
