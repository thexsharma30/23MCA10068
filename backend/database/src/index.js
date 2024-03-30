import React, { useState } from 'react';

const CrudComponent = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const updateItem = (index, newValue) => {
    const updatedItems = [...items];
    updatedItems[index] = newValue;
    setItems(updatedItems);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteItem(index)}>Delete</button>
            <button
              onClick={() => {
                const newValue = prompt('Enter new value:', item);
                if (newValue !== null) {
                  updateItem(index, newValue);
                }
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudComponent;
