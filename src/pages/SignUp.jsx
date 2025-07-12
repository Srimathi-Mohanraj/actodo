import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SignUp = (props) => {
const Navigate = useNavigate()
    const user = props.user
    const setuser = props.setuser

const[euname,seteuname ] = useState()
const[epword,setepword] = useState()

const handleEuname = (event) =>{
seteuname(event.target.value)
}
const handleEpword =(event) =>{
    setepword(event.target.value)
}
const addUser = () =>{
    setuser ([...user,{username:euname, password:epword }])
    Navigate("/")
    console.log(user)
}

    return (
        <>
            <div className='bg-black p-10'>
                <div className='bg-white p-10 border rounded-md'>
                    <h1 className='text-2xl'>Hey Hi</h1>
                    <p>Sign Up here :)</p>
                    <div className='flex flex-col'>
                        <input type="text" placeholder='username'
                            className='w-52 border border-black my-2 rounded-md py-1 px-1' onChange={handleEuname} />

                        <input type="text" placeholder='password'
                            className='w-52 border border-black my-2 rounded-md py-1 px-1' onChange={handleEpword} />

                        <input type="text" placeholder='confirm password'
                            className='w-52 border border-black my-2 rounded-md py-1 px-1' />

                        <button className='bg-[#FCA201] px-1 w-28 py-1 border rounded-md outline-none border-none' onClick={addUser}>Sign Up</button>
                        <p className='my-1'>Alredy have an account? <Link to='/' className=' underline' >Login</Link></p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default SignUp