import { useState } from "react";
import TodoStatus from "./TodoStatus";

export default function TodoModal(props) {
    const [itemName, setItemName] = useState("");
    const handleInput = (e) => {
        setItemName(e.target.value);
    }
    const handleClick = (e) => {
        e.preventDefault();
        if (itemName) {
            props.addItem([...props.todoItem, {
                id: Math.random(),
                name: itemName,
                completed: false
            }]);
            setItemName("");
            handleClose();
        }
    }
    const handleClose = () => {
        props.setShowModal(false);
    }
    return (
        <div className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full bg-neutral-700/50">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow">
                    <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => props.setShowModal(false)}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-4 md:p-5">
                        <h1 className="text-lg text-center">Add Todo</h1>
                        <label>Title</label>
                        <form>
                            <input type="text" name="title" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full p-2.5" placeholder="Type here.."
                                onChange={e => handleInput(e)} value={itemName} required />
                            <label className="block mt-4">Status</label>
                            <TodoStatus defValue={"incomplete"} class={"mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"} />
                            <button type="submit" className="mt-8 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                                onClick={(e) => handleClick(e)}>Add Task</button>
                            <button type="button" className=" ms-4 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                onClick={()=>handleClose}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
