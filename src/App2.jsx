//RENDER AS YOU FETCH
import { Suspense } from "react";
import { fetchData } from "./useFetch2";
import "./App.css";

const apiData = fetch("https://jsonplaceholder.typicode.com/users");

function App2() {
  const data = apiData.read();
  return (
    <div>
      <h1>Fetch Like a Pro</h1>
      <Suspense fallback={<div>Loading...</div>} />
      <ul className="card">
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App2;
