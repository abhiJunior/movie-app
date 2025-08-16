import React from 'react'
import { useState,useEffect,useRef } from 'react'
function AddMovie() {
    const titleRef = useRef("");
    const popularityRef = useRef("");
    const ratingRef = useRef("");
    useEffect(()=>{
        console.log("Rendered")
    })
    

   

    const handleForm = ()=>{
        console.log("title",titleRef.current.value)
        console.log("popularity",popularityRef.current.value)
        console.log("rating",ratingRef.current.value)
            
    }

    return (
        <div className='bg-white h-[500px] flex justify-center'>
            <form action="">
                <div>
                    <label htmlFor="title">Title</label>
                    <input ref={titleRef} type="text" name="" id="" placeholder='enter title' />
                </div>

                <div>
                    <label htmlFor="popularity">Popularity</label>
                    <input ref={popularityRef} type="text" name="" id="" placeholder='enter title' />
                </div>

                <div>
                    <label htmlFor="rating">Rating</label>
                    <input ref={ratingRef} type="text" name="" id="" placeholder='enter title' />
                </div>
                <div>
                    <button type="button" onClick={handleForm}>Submit</button>
                </div>
            </form>
        </div>
  )
}

export default AddMovie
