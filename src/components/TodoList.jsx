import { useEffect, useState } from "react";
import TodoItem from "./TodoItem"
import AddEventModalForm from "./AddEventModalForm";

function TodoList() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [todos, setTodos] = useState([])
  const [todoName, setTodoName] = useState('Name')
  const [todoDatetime, setTodoDatetime] = useState(null)
  const [todoNote, setTodoNote] = useState('Note')

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos);
      if (Array.isArray(parsedTodos) && parsedTodos.length > 0) {
        setTodos(parsedTodos);
      }
    } 
  }, [])



  return(
    <div className="flex flex-col w-full h-[93%] items-center justify-center ">
      <div className="flex flex-row w-full items-center justify-center">
        {todos.map((item) => (
          <TodoItem todo={item} />
        ))}
      </div>
     
      <button 
        className="hover:bg-blue-400 bg-blue-300 rounded pl-2 pr-4 p-1 font-semibold shadow-lg"
        onClick={() => setIsModalOpen(true)}>
          Create
      </button> 
      
      <AddEventModalForm isOpen={isModalOpen} 
      onClose={() => setIsModalOpen(false)} 
      setTodo={() => {
        const newTodo = {
          id: Date.now(),
          name: todoName,
          datetime: todoDatetime,
          note: todoNote
        }
        localStorage.setItem('todos', JSON.stringify([...todos, newTodo]))
        setTodos([...todos, newTodo])
        setIsModalOpen(false)
      }}>
        <input type="text" name="todoNameInput" id="todoNameInputId" placeholder="Todo name" 
        onChange={(e) => setTodoName(e.target.value)}
        className="border-1 rounded shadow-md mb-2 bg-white p-1 w-full"/>
        <input type="datetime-local" name="todoDatetimeInput" id="todoDatetimeInputId"
        onChange={(e) => setTodoDatetime(e.target.value)}
        className="border-1 rounded shadow-md mb-2 bg-white p-1 w-full"/>
        <input type="text" name="todoNoteInput" id="todoNoteInputId" placeholder="Todo note"
        onChange={(e) => setTodoNote(e.target.value)}
        className="border-1 rounded shadow-md mb-2 bg-white p-1 w-full"/>
      </AddEventModalForm>
    </div>
  )
}

export default TodoList