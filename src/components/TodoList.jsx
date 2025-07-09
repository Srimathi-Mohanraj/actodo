import React, { useState } from 'react'
import ToDoitem from './ToDoitem'

const TodoList = (props) => {
    const listact = props.listact
    const setlistact = props.setlistact 


    return (
        <div className='bg-[#BDB4EA] p-4 border rounded-md border-none flex-grow my-2'>
            <h1 className='text-2xl font-medium'>Today's Activity</h1>
           
            {listact.length ===0? <p>You haven't added anything yet</p>:""}
            
                {
                    listact.map(function (item, index) {
                        return (<ToDoitem id={item.id} activity={item.activity} index={index}  listact={listact} setlistact={setlistact}/>
                        )
                    })
                }
            
        </div>
    )
}

export default TodoList