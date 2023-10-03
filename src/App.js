import React, { useState } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Product 1', checked: false },
    { id: 2, name: 'Product 2', checked: false },
    { id: 3, name: 'Product 3', checked: false },
  ]);
  const handleCheckboxChange = (itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  return (
    <div className="App">
      <Header />
      <Body items={items} handleCheckboxChange={handleCheckboxChange} />
      <Footer/>
    </div>
  );
}

export default App;
