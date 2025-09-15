import ForItem from './ForItem';

export default function ForFilter({ src }) {
  const lowPrice = src.filter((book) => book.price < 3500);

  return (
    <dt>
      {lowPrice.map((elem) => (
        <ForItem book={elem} key={elem.isbn} />
      ))}
    </dt>
  );
}
