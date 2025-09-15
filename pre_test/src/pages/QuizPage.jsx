import React, { useEffect, useState } from 'react';
import Display from '../components/Display/Display';
import quizData from '../data/quiz';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../const';

export default function QuizPage() {
  const [quizIndex, setQuizindex] = useState(0);
  const [answerlogs, setAnswerlogs] = useState([]);
  const navigation = useNavigate();
  const MAX_QUIZ_LEN = quizData.length;

  const handleClick = (clickedIndex) => {
    if (clickedIndex === quizData[quizIndex].anserIndex) {
      setAnswerlogs((prev) => [...prev, true]);
    } else {
      setAnswerlogs((prev) => [...prev, false]);
    }
    setQuizindex((prev) => prev + 1);
  };

  useEffect(() => {
    if (answerlogs.length === MAX_QUIZ_LEN) {
      const correctNum = answerlogs.filter((answer) => {
        return answer === true
      })
      navigation(ROUTES.RESULT, {
        state: {
          maxQuizLen: MAX_QUIZ_LEN,
          correctNumLen: correctNum.length
        }
      });
    }
  }, [answerlogs, MAX_QUIZ_LEN, navigation])

  return (
    <>
      {quizData[quizIndex] && <Display>
        {`Q${quizIndex + 1}. ${quizData[quizIndex].question}`}
      </Display>}
      {quizData[quizIndex] && quizData[quizIndex].options.map((option, index) => {
          return (
          <Button key={`option-${index}`} onClick={() => handleClick(index)}>
            {option}
          </Button>
          )
        })
      }
    </>
  )
}
