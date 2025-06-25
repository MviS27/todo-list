import TodoItem from "./TodoItem"

const todoItems = ['Name1', 'Name2', 'Name3', 'Name4'];

function TodoList() {
  return(
    <div className="w-full h-[93%] flex items-center justify-center ">
     {todoItems.map((item) => (
      <TodoItem name={item} />
     ))}
      
    </div>
  )
}

export default TodoList