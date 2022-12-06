import React from 'react'
import './Questions.css';
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
        {preguntas[preguntaActual].opciones.map((respuesta) =>(
          <><input 
          type="checkbox" 
          value={checkBoxValue}
          onChange={(e)=>changeCheckBoxValue(e)}
          /><label>{respuesta.textoRespuesta}</label></>
        ))}
      </div>
      <button
        onClick={(e)=>showPrevQuestion(e)}>
        Volver
      </button>
      <button
        onClick={(e)=>showNextQuestion(e)}>
        Continuar
      </button>
    </div>
  )
}

export default Questions