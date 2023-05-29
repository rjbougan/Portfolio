import React, { useState } from 'react';

function App() {
  const [item, setItem] = useState('');
  const [itemsList, setItemsList] = useState([]);

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (item.trim() !== '') {
      setItemsList([...itemsList, item.trim()]);
      setItem('');
    }
  };

  const handleDelete = (index) => {
    setItemsList((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={item} onChange={handleChange} />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {itemsList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;