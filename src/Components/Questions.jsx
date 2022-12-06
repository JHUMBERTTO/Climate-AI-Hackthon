import React from 'react'

import './Card.css';
import './Checkbox.css'
import {useState, useEffect} from "react";
import preguntas from "./preguntas";


function Questions (){
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinish, setIsFinished] = useState(false);
  const [checkBoxValue, setcheckboxValue] = useState(false)

  function showPrevQuestion(value, e){
      //regresar a pregunta anterior
        setPreguntaActual(preguntaActual - 1)
  }
  function showNextQuestion(value, e){
      //cambiar a  la siguiente pregunta
        setPreguntaActual(preguntaActual + 1)
      
  }
  function changeCheckBoxValue(value, e){
    //cambiar el  valor true/false
    setcheckboxValue(checkBoxValue)    
}
  return (
    <div className='questionCard'>
      <h1 className='questions'>{preguntas[preguntaActual].titulo}</h1>
      <div className='answer'>
        {preguntas[preguntaActual].opciones.map((respuesta, index) =>(
          <><input 
          type="checkbox" 
          value={checkBoxValue}
          onChange={(e)=>changeCheckBoxValue(e)}
          id={`check${index + 1}`}
          /><label for={`check${index + 1}`}>{respuesta.textoRespuesta}</label></>
        ))}
      </div>
      <div className='buttonsDad'>
      <button className='btn'
        onClick={(e)=>showPrevQuestion(e)}>
        Back
      </button>
      <button className='btn'
        onClick={(e)=>showNextQuestion(e)}>
        Continue
      </button>
          </div>
    </div>


  )
}

export default Questions