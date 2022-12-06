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
        score = score + opcion.value
      }
    }
  }


  if (showScore) {
    return (
      <div className="questionCard">
        <h1 className="questions">Your score is: {score}</h1>
      </div>
    );
  }

  if (preguntaActual == 0) {
    
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
              <label for={`check_${preguntaActual}_${index + 1}`}>
                {opcion.textoRespuesta}
              </label>
            </>
          );
        })}
      </div>
      <div className="buttonsDad">
        <button className="btn" onClick={(e) => showPrevQuestion(e)}>
          Back
        </button>
        <button className="btn" onClick={(e) => showNextQuestion(e)}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default Questions;
