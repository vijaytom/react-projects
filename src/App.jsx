import "./App.css";
import { useState } from "react";
import TodosItem from "./components/TodosItem";
import TodoModal from "./components/TodoModal";
import TodoStatus from "./components/TodoStatus";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [todoItem, setTodoItem] = useState([]);
  const addItem = (props) => {
    setTodoItem([...props])
  }
  console.log(todoItem)
  return (
    <div className="h-full flex justify-center items-center">
      <div className="w-full max-w-lg">
        <div className="flex justify-between">
          <TodoStatus defValue={"filter"} class={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block  px-2 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} />
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={() => setShowModal(true)}>
            Add Task
          </button>
        </div>
        <div className="bg-slate-200 rounded-md mt-5 p-4">
          {
            todoItem.map(item => (
              <TodosItem key={item.id} obj={item} todoItem={todoItem} addItem={addItem} setShowModal={setShowModal} />
            ))
          }
        </div>
      </div>
      {
        showModal && (
          <TodoModal setShowModal={setShowModal} addItem={addItem} todoItem={todoItem} />
        )
      }
    </div>
  );
}
