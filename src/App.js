import React, { useState } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Product 1', checked: false, description: 'Description of Product 1', comments: [] },
    { id: 2, name: 'Product 2', checked: false, description: 'Description of Product 2', comments: [] },
    { id: 3, name: 'Product 3', checked: false, description: 'Description of Product 3', comments: [] },
  ]);

  const handleCheckboxChange = (itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  const handleAddComment = (productId, comment) => {
    const updatedItems = items.map((item) =>
      item.id === productId ? { ...item, comments: [...item.comments, comment] } : item
    );
    setItems(updatedItems);
  };

  return (
    <div className="App">
      <Header />
      <Body items={items} handleCheckboxChange={handleCheckboxChange} onAddComment={handleAddComment} />
      <Footer />
    </div>
  );
}


export default App;
