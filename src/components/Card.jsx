import React from 'react'

const Card = (props) => {
    return (
        <>
            <div style={{backgroundColor:props.bgcolor}} className=" px-5 py-10 border rounded-md text-center border-none flex-grow">
                <h1 className="text-2xl font-medium">{props.title}</h1>
                <p>{props.subtitle}</p>
            </div>

        </>
    )
}

export default Card