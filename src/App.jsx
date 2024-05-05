import Header from "./components/Header";
import Form from "./components/Form";
import Items from "./components/Items";
import Footer from "./components/Footer";
import { useState } from "react";
const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      description: "Passeports",
      status: false,
      quantity: 2,
    },
    {
      id: 2,
      description: "Brosse à dents",
      status: false,
      quantity: 2,
    },
    {
      id: 3,
      description: "Chaussettes",
      status: false,
      quantity: 10,
    },
  ]);

  // ADD ITEM
  const handleAdd = (item) => {
    setItems((items) => [...items, item]);
  };

  // DELETE ITEM
  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  // HANDLE TOGGLE
  const handleToggle = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  // HANDLE CLEAR
  const handleClear = () => {
    if (window.confirm("Souhaitez-vous supprimer tous vos articles ?")) {
      setItems([]);
    }
  };

  return (
    <div className="app-container">
      <Header />
      <Form onAdd={handleAdd} />
      <Items
        items={items}
        onDelete={handleDelete}
        onToggle={handleToggle}
        onClear={handleClear}
      />
      <Footer items={items} />
    </div>
  );
};

export default App;
