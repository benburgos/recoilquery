import { useQuery } from 'react-query';

// api request custom hook
export const useJsonPlaceholder = () => {
  // make the api call and save the response
  const response = useQuery('myQuery', async () => {
    const r = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return r.json();
  });
  // return the response
  return response;
};
