import React, { useState } from 'react';
import database from '../Firebase'

function Adddata() {
    const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [proper, setProper] = useState("");

  // Push Function
  const Push = () => {
    database.ref("Constantsprop").push({
      type: type,
      name: name,
      proper: proper,
    }).then(() => {
      alert("Data added to the database successfully!");
      // Optionally, you can clear the input fields after adding data
      setType("");
      setName("");
      setProper("");
    }).catch((error) => {
      console.error("Error adding data to the database:", error);
      alert("Error adding data to the database");
    });
  }
  return (
    <div>
    <h2>Add Constantsprop Data</h2>
    <input type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="Type" />
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
    <input type="text" value={proper} onChange={(e) => setProper(e.target.value)} placeholder="Proper" />
    <button onClick={Push}>Add Data</button>
  </div>
  )
}

export default Adddata