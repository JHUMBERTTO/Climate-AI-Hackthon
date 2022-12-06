import React from 'react'
import './Card.css';
import './Checkbox.css'

function Questions() {
  return (
    <div className='questionCard'>
      <h1 className='questions' id='fuente personalizada'>¿Example question?</h1>
      <div className='answer'>
        <input type="checkbox" value="false" id='check1'/>
        <label for='check1'>Question</label>
      </div>
      <div className='answer'>
        <input type="checkbox"  value="false" id='check2'/>
        <label for='check2'>Question</label>
      </div>
      <div className='answer'>
        <input type="checkbox"  value="false" id='check3'/>
        <label for='check3'>Question</label>
      </div>
      <div className='answer'>
        <input type="checkbox"  value="false" id='check4'/>
        <label for='check4'>Question</label>
      </div>
    </div>


  )
}

export default Questions