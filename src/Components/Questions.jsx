import React from "react";

import "./Card.css";
import "./Checkbox.css";
import { useState, useEffect } from "react";
import preguntas1 from "./preguntas";

function Questions() {
  const [botonActivo, setBotonActivo] = useState(false);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinish, setIsFinished] = useState(false);
  const [preguntas, setPreguntas] = useState(preguntas1);
  const [showScore, setShowScore] = useState(false);

  function showPrevQuestion(value, e) {
    //regresar a pregunta anterior
    if (preguntaActual !== 0) {
      setPreguntaActual(preguntaActual - 1);
    }else{
      setBotonActivo(false);
    }
  }
  function showNextQuestion(value, e) {
    //cambiar a  la siguiente pregunta
    if (preguntaActual !== preguntas.length - 1) {
      setPreguntaActual(preguntaActual + 1);
    } else {
      setShowScore(true);
    }
  }
  function changeCheckBoxValue(e, indexOpcionActual) {
    //cambiar el  valor true/false

    let _preguntas = preguntas.map((pregunta, i) => {
      if (preguntaActual === i) {
        //cambia valor
        let _pregunta = { ...pregunta };
        _pregunta.opciones = pregunta.opciones.map((opcion, o) => {
          if (indexOpcionActual === o) {
            let _opcion = { ...opcion, status: e.target.checked };
            return _opcion;
          } else {
            return opcion;
          }
        });

        return _pregunta;
      } else {
        return pregunta;
      }
    });

    setPreguntas(_preguntas);
  }

  let score = 0;
  for (let pregunta of preguntas) {
    for (let opcion of pregunta.opciones) {
      if (opcion.status === true) {
        score += opcion.value
      }
    }
  }
  
// final showresult
  if (showScore) {
    return (
      <div className="questionCard">
        <h1 className="questions">Your score is: {score}</h1>
        <>{scoreResult()}</>
        <div className="form-input">
          <label>Name</label>
          <input type="Name" placeholder="FullName" id="email"></input>
        </div>
        <div className="form-input">
          <label>Company</label>
          <input type="Company" placeholder="CompanyName" id="CompanyName"></input>
        </div>
        <div className="form-input">
          <label>Email</label>
          <input type="email" placeholder="youremail@gmail.com" id="email"></input>
        </div>
        <button className="btnC" onClick={(e) => alert("Thanks! someone will contact you soon.")}>
          Continue
        </button>
      </div>
    );
  }

  function scoreResult(){
    if(score <= 8){
      return  <div>
                <h1 className="questions">Low Climate Risk</h1>
                <p>Based on your inputs, your company is facing a low level of climate risk today. However, the volatility of climate change demands that businesses start future-proofing now, so it’s a good idea to look into long-term solutions.</p>
              </div>
    }else if(score > 8 && score <= 16){
      return  <div>
                <h1 className="questions">Low Climate Risk</h1>
                <p>Based on your inputs, your company is facing some climate risks and may be taking some initial steps to mitigate them, but we have identified additional actions that would not only protect your business from extreme weather, but possibly uncover new opportunities.</p>
              </div>
    }else{
      return  <div>
                <h1 className="questions">Low Climate Risk</h1>
                <p>Based on your inputs, your company is facing several climate risks and is not currently taking sufficient mitigating steps to avoid business impact. We have identified additional actions that would not only protect your business from extreme weather, but possibly uncover new opportunities.</p>
              </div>
    }
  }


  return (
    <div className="questionCard">
      <h1 className="questions">{preguntas[preguntaActual].titulo}</h1>
      <div className="answer">
        {preguntas[preguntaActual].opciones.map((opcion, index) => {
          return (
            <>
              <input
                type="checkbox"
                checked={opcion.status}
                onChange={(e) => changeCheckBoxValue(e, index)}
                id={`check_${preguntaActual}_${index + 1}`}
              />
              <label className="checkbox-label" for={`check_${preguntaActual}_${index + 1}`}>
                {opcion.textoRespuesta}
              </label>
            </>
          );
        })}
      </div>
      <div className="buttonsDad">
        <button className="btnB" onClick={(e) => showPrevQuestion(e)}>
          Back
        </button>
        <button className="btnC" onClick={(e) => showNextQuestion(e)}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default Questions;
