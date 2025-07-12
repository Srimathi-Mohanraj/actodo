import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {

 const Navigate = useNavigate()
  const [euname, seteuname] = useState()
  const [eupassword, seteupassword] = useState()
  const [ruser, setruser] = useState(true)

  const user = props.user
  const setuser = props.setuser


  const handleuname = (event) => {
    seteuname(event.target.value)
  }
  const handleupassword = (event) => {
    seteupassword(event.target.value)
  }

  const checkUser = () => {

    var userfound = false
    user.forEach(function (item) {
      if (item.username === euname && item.password === eupassword) {

        console.log("login successfully")
        userfound = true
     Navigate("/Landing" ,{state:{user:euname}})


      }
    })
    if (userfound === false) {
      console.log("login failed")
      setruser(false)
    }
  }

  return (
    <>
      <div className='bg-black p-10'>
        <div className='bg-white px-10 border rounded-md py-10'>
          <h1 className='text-2xl'>Hey Hi</h1>
          {
            ruser ? <p>I help you manage your actvities after you login :)</p> : <p className='text-red-500'>Please Sign Up before your login</p>
          }

          <div className='flex flex-col my-2 '>
            <input type="text" placeholder='username'
              className='w-52 border border-black my-2 rounded-md py-1 px-1' onChange={handleuname} />

            <input type="text" placeholder='password'
              className='w-52 border border-black my-2 rounded-md py-1 px-1' onChange={handleupassword} />

            <button className='bg-[#8272DA] px-1 w-28 py-1 border rounded-md outline-none border-none' onClick={checkUser} >Login</button>
            <p className='my-1'>Don't have an account? <Link to='/SignUp' className=' underline' >Sign Up</Link></p>
          </div>


        </div>
      </div>
    </>
  )
}

export default Login