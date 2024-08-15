import React from 'react'
import Card2 from './Card2'

const Cards2 = () => {
    return (
        <>
            <div className='w-full bg-black'>
                <div className='max-w-screen-xl py-20 mx-auto gap-[3px]  flex'>
                    <Card2 width={"basis-2/5"} start={false} para={true} />
                    <Card2 width={"basis-2/3"} start={true} para={false} hover="true" />
                </div>
            </div>


        </>
    )
}

export default Cards2