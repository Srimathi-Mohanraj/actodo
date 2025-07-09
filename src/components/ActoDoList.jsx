import { useState } from "react"

const ActoDoList = (props) => {

  const listact = props.listact
  const setlistact = props.setlistact
  
  const [newlist,setnewlist] = useState(" ")

const handleNewlist = (event) =>{
  setnewlist(event.target.value)
}

const addActivity = () =>{

setlistact ([...listact,{id:listact.length+1,activity:newlist}])
setnewlist("")
}

  return (
    <div className='flex flex-col gap-3 my-2'>
      <h1 className='text-2xl font-medium'>Manage Activites</h1>
      <div>
        <input value={newlist} onChange={handleNewlist} type="text" placeholder='Next Activity?' className='border border-black px-2 py-1 bg-transparent' />
        <button onClick={addActivity} className='bg-black text-white border border-black p-1' >Add</button>
      </div>
    </div>
  )
}

export default ActoDoList