import ForItem from './ForItem';

export default function ForList({ src }) {
  return (
    <dl>
      {src.map((elem) => {
        return <ForItem book={elem} key={elem.isbn} />;
      })}
    </dl>
  );
}
