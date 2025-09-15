import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../const';
import Result from '../components/Result/Result';
import Loading from '../components/Loading/Loading';

export default function ResultPage() {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const maxQuizLen = location.state.maxQuizLen;
  const correctNumLen = location.state.correctNumLen;
  
  useEffect(() => {
    setTimeout(() => {setActive(true)}, 3000)
  }, [])
  return (
    <>
      <Loading />
      <h1>Result</h1>
      <Result maxQuizLen={maxQuizLen} correctNumLen={correctNumLen} />
      <Link to={ROUTES.QUIZ}>もう一度チャレンジ</Link>
    </>
  )
}