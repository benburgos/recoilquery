import { useCounterState } from '../atom';
import { useState } from 'react';

function Counter(props) {
  // declare a new piece of state (old way)
  const [oldCounter, setOldCounter] = useState(0);
  // bring in the state from the atom
  const [counter, setCounter] = useCounterState()

  return (
    <div>
      <h1>With useState - {oldCounter}</h1>
      <button onClick={() => setOldCounter(oldCounter + 1)}>Add One</button>
      <h1>With useRecoilState - {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Add One</button>
    </div>
  );
}

export default Counter;
