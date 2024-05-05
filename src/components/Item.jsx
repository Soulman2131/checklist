const Item = ({ item, onDelete, onToggle }) => {
  const handleDelete = () => {
    if (window.confirm("Souhaitez-vous supprimer l'article ?")) {
      onDelete(item.id);
    }
  };
  return (
    <li>
      <input
        type="checkbox"
        value={item.status}
        onChange={() => onToggle(item.id)}
      />
      <span style={item.status ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={handleDelete}>❌</button>
    </li>
  );
};

export default Item;
