import useFetch from "./useFetch";
import "./App.css";

function App() {
  const { data, loading, error, handleCancelRequest } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      <h3>Fetching</h3>
      <button onClick={handleCancelRequest}>Cancel Request</button>
      <div>
        <ul>
          {error && <li>Error:{error}</li>}
          {loading && <li>Loading...</li>}
          {data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
