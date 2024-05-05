import { useState } from "react";
import { nanoid } from "nanoid";

const Form = ({ onAdd }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleAdd = (e) => {
    e.preventDefault();
    const data = {
      id: nanoid(),
      description,
      quantity,
      status: false,
    };
    onAdd(data);
    setDescription("");
    setQuantity(1);
  };

  return (
    <form onSubmit={handleAdd}>
      <h3> J'aurai besoin de quoi ? </h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((val, index) => (
          <option value={val} key={index}>
            {val}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Ex. dentifrice"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input type="submit" value="Ajouter" />
    </form>
  );
};

export default Form;
