import React from 'react';
import { Card } from './Card';
import Questions from './Questions';

const QuestionsPage = () => {
  return (
    <Card>
        <h1 className='header'>Climate Resilence Quiz</h1>
        <Questions/>
    </Card>
  )
}

export default QuestionsPage