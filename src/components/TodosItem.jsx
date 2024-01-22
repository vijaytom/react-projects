import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";

export default function TodosItem(props) {
    const data = props.todoItem;
    const [checked, setChecked] = useState(false);
    const handleChange = (objID) => {
        setChecked(!checked);
        const newData = data.filter(item => item.id === objID);
        newData[0].completed = !checked;
        props.addItem([...data]);
        props.setComplete(newData[0].completed ? 'complete' : 'incomplete');
    }
    useEffect(() => {
        setChecked(props.obj.completed);
    }, [props.obj.completed]);
    const handleEdit = async (objID) => {
        await props.setShowModal(true);
        const newData = data.filter(item => item.id === objID);
        console.log(newData);
        await props.setItem(newData[0].name);
        await props.setComplete(newData[0].completed ? 'complete' : 'incomplete');
    }
    const handleDelete = (objID) => {
        const newData = data.filter(item => item.id !== objID);
        props.addItem(newData);
    }
    return (
        <div className="flex justify-between bg-white rounded-sm w-full p-2">
            <div className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onChange={() => handleChange(props.obj.id)} checked={checked} />
                <label className={checked ? "line-through text-zinc-500" : ""}>{props.obj.name}</label>
            </div>
            <div className="flex items-center gap-3">
                <button className="bg-slate-200 px-2 py-1 rounded-sm hover:text-red-500" onClick={() => handleDelete(props.obj.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                <button className="bg-slate-200 px-2 py-1 rounded-sm hover:text-blue-500" onClick={() => handleEdit(props.obj.id)}>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
            </div>
        </div>
    )
}