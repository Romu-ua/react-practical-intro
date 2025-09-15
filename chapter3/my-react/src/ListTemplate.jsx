import { Fragment } from 'react';

export default function ListTemplate({ src, children }) {
  return (
    <dl>
      {src.map((elem) => {
        return <Fragment key={elem.isbn}>{children(elem)}</Fragment>;
      })}
    </dl>
  );
}
