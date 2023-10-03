import React from 'react';
import './App.css';

function Body({ items, handleCheckboxChange }) {
  return (
    <div className="body">
        <div className='bodydiv'>
            <h2>List of Product</h2>
            <dl>
                {items.map((item) => (
                <dd key={item.id}>
                    <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheckboxChange(item.id)}
                    />
                {item.name}
                </dd>
                ))}
            </dl>
      </div>
    </div>
  );
}
export default Body;
