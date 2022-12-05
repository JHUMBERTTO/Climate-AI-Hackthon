import React from 'react'
import './Card.css';

export const Card = (props) => {
  return (
    <div class="card">{ props.children }</div>
  )
}
