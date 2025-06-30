import { useEffect, useState } from "react";
import TodoItem from "./TodoItem"
import AddEventModalForm from "./AddEventModalForm";

function TodoList() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [todoCount, setTodoCount] = useState(0)
  const [todos, setTodos] = useState([])
  const [todoName, setTodoName] = useState('Name')
  const [todoDatetime, setTodoDatetime] = useState(null)
  const [todoNote, setTodoNote] = useState('Note')

  useEffect(() => {
    setTodos([...todos, {
      id: todoCount+1, 
      name: todoName, 
      datetime: todoDatetime,
      note: todoNote }])
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todoCount])

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])



  return(
    <div className="flex flex-col w-full h-[93%] items-center justify-center ">
      <p>Todo count: {todoCount}</p>
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
        setTodoCount(todoCount + 1)
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