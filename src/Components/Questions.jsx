import React from 'react'
import './Questions.css';

function Questions() {
  return (
    <div className='questionCard'>
      <h1 className='questions'>¿Example question?</h1>
      <div className='answer'>
        <input type="checkbox" value="false"/>
        <label>Question</label>
      </div>
      <div className='answer'>
        <input type="checkbox" value="false"/>
        <label>Question</label>
      </div>
      <div className='answer'>
        <input type="checkbox" value="false"/>
        <label>Question</label>
      </div>
      <div className='answer'>
        <input type="checkbox" value="false"/>
        <label>Question</label>
      </div>
    </div>
  )
}

export default Questions