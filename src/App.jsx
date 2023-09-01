import { useState, useEffect } from "react";
import "./App.css";

function App() {
  
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
