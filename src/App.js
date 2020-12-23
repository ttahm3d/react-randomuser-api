import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

import Person from "./Person";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        setLoading(false);
        setUsers(res.data);
      })
      .catch((error) => console.error(error));
  }, []);
  // console.log(user.results);
  return (
    <div className="App">
      {loading ? <p>Loading....</p> : <Person user={user.results[0]} />}
    </div>
  );
}
