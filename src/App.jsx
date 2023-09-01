import useFetch  from "./useFetch";
import "./App.css";

function App() {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      <h3>Fetching</h3>
      <div>
        <ul>
          {data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
