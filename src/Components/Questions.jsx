import React from 'react'

import './Card.css';
import './Checkbox.css'
import {useState, useEffect} from "react";
import preguntas1 from "./preguntas";


function Questions (){
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinish, setIsFinished] = useState(false);
  const [preguntas, setPreguntas] = useState(preguntas1) 

  function showPrevQuestion(value, e){
      //regresar a pregunta anterior
        setPreguntaActual(preguntaActual - 1)
  }
  function showNextQuestion(value, e){
      //cambiar a  la siguiente pregunta
        setPreguntaActual(preguntaActual + 1)
      
  }
  function changeCheckBoxValue(e, indexOpcionActual){
    //cambiar el  valor true/false

    // copias arreglos
    // const nuevoArreglo = preguntas.map(p => {
    //   return p
    // })
    console.log("ejecuta")
    let _preguntas = preguntas.map((pregunta, i)=> {
      if(preguntaActual === i){
        //cambia valor
        let _pregunta = { ...pregunta }
        _pregunta.opciones = pregunta.opciones.map((opcion, o) =>{
          if(indexOpcionActual === o){
            let _opcion = { ...opcion, status:true}
            return _opcion
          }else{
            return opcion
          }
        })

        return _pregunta
      }else{
        return pregunta
      }
    })

    setPreguntas(_preguntas)
    // setPreguntas(preguntas)
    // {preguntas[preguntaActual].opciones.map((status) =>(
    //   setPreguntas(preguntaActual.opciones.status) !== false
    // ))}
  }

  console.log("render")
  console.log(preguntas)

  return (
    <div className='questionCard'>
      <h1 className='questions'>{preguntas[preguntaActual].titulo}</h1>
      <div className='answer'>
        {preguntas[preguntaActual].opciones.map((opcion, index) =>(
          <><input 
          type="checkbox" 
          value={opcion.status}
          onChange={(e)=>changeCheckBoxValue(e, index)}
          id={`${preguntaActual}check${index + 1}`}
          /><label for={`${preguntaActual}check${index + 1}`}>{opcion.textoRespuesta}</label></>
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