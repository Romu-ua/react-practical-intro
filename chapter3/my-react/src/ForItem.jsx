export default function ForItem({ book, key }) {
  return (
    <>
      <dt>
        <a href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
          {book.item} ({book.price})円
        </a>
      </dt>
      <dd>{book.summary}</dd>
    </>
  );
}
