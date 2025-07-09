import React from 'react'
import ActoDoList from './ActoDoList'
import TodoList from './TodoList'
import { useState } from 'react'


const ToDoContainer = () => {
         const [listact, setlistact] = useState([
        {
            id: 1,
            activity: "Wake up at 6am"
        },
        {
            id: 2,
            activity: "Go for walk"
        },
        {
            id: 3,
            activity: "take a shower"
        }

    ])


 
    return (
        <>
            <div className='flex gap-5 flex-wrap'>
                <ActoDoList listact ={listact} setlistact={setlistact}/>
               <TodoList listact ={listact} setlistact={setlistact}/>
            </div>
        </>

    )
}

export default ToDoContainer