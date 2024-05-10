import React, { useState } from 'react';
import TodoEdit from './TodoEdit'; //Importa TodoEdit
 
function TodoItem({ todo, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo);
  
  const handleEdit = (newText) => {
    onEdit(newText);
    setIsEditing(false);
    setEditedText(newText);
  };
  console.log(editedText)
  return (
    <li>
      {isEditing ? (
        <TodoEdit todo={editedText} onSave={handleEdit} />
      ) : (  
        <>  
          {todo}
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={onDelete}>Eliminar</button></>
      )}
    </li>
  );
}
 
export default TodoItem;
