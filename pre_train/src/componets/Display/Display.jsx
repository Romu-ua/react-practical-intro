import { useState, useEffect } from 'react';

function Display(props) {
  const { count } = props;

  const [text, setText] = useState('Loding...');
  useEffect(() => {
    setTimeout(() => {}, 1000);
  }, []);

  return <div>{text}</div>;
}

export default Display;
