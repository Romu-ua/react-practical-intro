import { Link } from 'react-router-dom';

function SamplePage() {
  return (
    <>
      <h1>SamplePage</h1>
      <Link to="/" target="_blank">
        to home
      </Link>
    </>
  );
}

export default SamplePage;
