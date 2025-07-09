import React from 'react'

const ToDoitem = (props) => {

    const listact = props.listact
    const setlistact = props.setlistact


    const handleDelete = (removeid) => {
        {
            var temlistarr = listact.filter(function (item) {
                if (item.id === removeid) {
                    return false
                }else{
                    return true
                }
         
            })
            setlistact(temlistarr)
        }
    }
    return (
        <>
            <div className='flex justify-between '>
                < p className='py-1' >{props.index + 1}. {props.activity}</p>
                <button className='text-red-600' onClick={() => handleDelete(props.id) }>Delete</button>
            </div>
        </>

    )
}

export default ToDoitem