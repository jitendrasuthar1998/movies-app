import React from 'react'
import avatar from "../assets/avatar.png";
import "./interview.scss";

const Interview = () => {
  return (
    <div>
        <h1>Frontend Developer Interview Questions</h1>
        <img src={avatar} alt='avatar' id='avatar' className='avatar'/>
        <input type='text' placeholder='Enter your name'/>
        <a href='https://www.google.com' target='_blank'>Google</a>
        <span>Hello</span>
        <video src='https://youtu.be/ZEhjgpTdkqo' autoPlay height={100} width={100}/>
    </div>
  )
}

export default Interview