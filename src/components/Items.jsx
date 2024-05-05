import { useState } from "react";
import Item from "./Item";

const Items = ({ items, onDelete, onToggle, onClear }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortByItems;

  if (sortBy === "input") sortByItems = items;

  // Sort description
  if (sortBy === "description")
    sortByItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  // Sort status
  if (sortBy === "status")
    sortByItems = items
      .slice()
      .sort((a, b) => Number(a.status) - Number(b.status));

  return (
    <div className="app-items">
      <ul>
        {sortByItems.map((item, index) => (
          <Item
            key={index}
            item={item}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </ul>
      <div className="order-list">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Ordre croissant</option>
          <option value="description">Ordre description</option>
          <option value="status">Ordre status</option>
        </select>
        <input type="button" value="Tout effacer" onClick={onClear} />
      </div>
    </div>
  );
};

export default Items;
