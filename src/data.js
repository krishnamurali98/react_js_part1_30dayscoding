import React, { useState } from 'react';
import Datas from './data.json';

function Data() {
    const [nData, setNData] = useState(Datas);
    
    const handleRemove = (id) => {
        setNData(nData.filter(items => items.id !== id))
    }

    const handleUpdate = (id) => {
        setNData(nData.map(items => {
            if (items.id === id) {
                return { ...items, name: 'New Name' }
            } else {
                return items;
            }
        }))
    }

    return (
        <div>
            <ul>
                {
                    nData.map(items => (
                    <li key={items.id}>
                        {items.name}
                        <button onClick={() => handleUpdate(items.id)}>Update</button>
                        <button onClick={() => handleRemove(items.id)}>Remove</button>
                    </li>
                    ))
                }
            </ul>
      <button onClick={() => setNData([])}>Clear</button>
    </div>
  );
}

export default Data;
