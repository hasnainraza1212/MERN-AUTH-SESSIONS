import React, { useEffect } from 'react'
import { getUser } from '../../endPoint/endPoint'

const About = () => {
  useEffect(()=>{
    (async()=>{
      const res  = await getUser()
      console.log(res)
    })()
      
  },[])
  return (
    <div>About</div>
  )
}

export default About