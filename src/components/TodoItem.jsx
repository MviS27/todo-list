function TodoItem({ todo, onDelete }) {

  const handleContextMenu = (e) => {
    e.preventDefault();
    if (window.confirm('Удалить задачу?')) {
      onDelete(todo.id);
    }
  };

  return(
    <div className="flex flex-col justify-between items-center bg-blue-300 hover:bg-blue-400 m-3 p-6 min-h-35 min-w-55 rounded-lg shadow-lg"
    onContextMenu={handleContextMenu}
    title="ПКМ для удаления" 
    >
      <p className="m-2 mt-0">{new Date(todo.datetime).toLocaleString()}</p>
      <p className="m-1 mt-0">{todo.note}</p>
    </div>
  )
}

export default TodoItem