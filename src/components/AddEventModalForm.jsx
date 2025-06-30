

function AddEventModalForm({ isOpen, onClose, setTodo, children }){
	if (!isOpen) return null

  return(
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="flex flex-col items-center justify-center bg-green-100 p-6 pb-9 pt-7 rounded shadow-lg relative">
        <button onClick={onClose} className="absolute text-black top-0 right-0 pl-1 pr-1 hover:bg-green-200 hover:text-red-500">X</button>
        {children}
				<p className="absolute top-0 left-2">Create todo</p>
				<button 
        className="absolute bottom-1 hover:bg-blue-400 bg-blue-300 rounded pl-2 pr-4 p-1 font-semibold shadow-lg"
        onClick={setTodo}>
          Create
      </button> 
      </div>
    </div>
  )
}

export default AddEventModalForm