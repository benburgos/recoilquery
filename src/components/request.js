import { useQuery } from 'react-query';

function Request() {
  // make our query
  const { isSuccess, isError, isLoading, data, refetch } = useQuery(
    'myQuery',
    async () => {
      const r = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      return r.json();
    }
  );

  if (isError) {
    return <h1>Error</h1>;
  }
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isSuccess) {
    return <h1>Success</h1>;
  }
}

export default Request;
