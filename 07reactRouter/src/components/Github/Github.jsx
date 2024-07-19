// import React from 'react'

import { useEffect } from "react"

function Github() {
    useEffect(()=>{
        fetch('https://api.github.com/user/hiteshchodhary').then(response=>response.json()).then(data=>{
            console.log(data)
        })
    },[]);
  return (
    <div className='text-center m-4 bg-red-700 text-white p-4 text-3xl'>Github Followers:</div>
  )
}

export default Github