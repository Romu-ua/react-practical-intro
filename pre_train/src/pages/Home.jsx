import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/sample-page">to sample-page</Link>
    </>
  );
}

export default Home;
