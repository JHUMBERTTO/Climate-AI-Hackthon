import React from 'react';
import { Card } from './Card';

const StartingPage = () => {
  return (
    <Card>
        <h1 className='header'>Climate Resilence Quiz</h1>
        <Questions/>
    </Card>
  )
}

export default StartingPage