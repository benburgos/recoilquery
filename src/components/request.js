import { useQuery } from 'react-query';

function Request() {
  // make our query
  const response = useQuery('myQuery', async () => {
    const r = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return r.json();
  });

  console.log(response);

  return <h1> Request </h1>;
}

export default Request;
