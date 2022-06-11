import { useJsonPlaceholder } from '../queryhooks';

function Request() {
  // make our query
  const { isSuccess, isError, isLoading, data, refetch } = useJsonPlaceholder();

  if (isError) {
    return (
      <div>
        <h1>Request Failed</h1>
        <button onClick={() => refetch()}>Try Again</button>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div>
        <h1>Loading</h1>
        <button onClick={() => refetch()}>Try Again</button>
      </div>
    );
  }
  if (isSuccess) {
    return (
      <div>
        <h1>Request Succeded</h1>
        <ul>
          {Object.keys(data).map((key, index) => (
            <li key={index}>
              {key}: {data[key]}
            </li>
          ))}
        </ul>
        <button onClick={() => refetch()}>Try Again</button>
      </div>
    );
  }
}

export default Request;
