import { useContext } from 'react';
// export { getServerSideProps } from '../server/pages/about';
import { DummyContext } from '../context/DummyContext';

export default function Runtime({ tokenA, tokenB }) {
  const dummy = useContext(DummyContext);
  console.log(dummy.state);
  return (
    <h1>About</h1>
  )
}
