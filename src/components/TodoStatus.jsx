export default function TodoStatus(props) {
    const handleSelect = (e)=>{
        props.handleSelect(e);
    }
    return (
        <select defaultValue={{ value: props.completed }} className={props.class + " capitalize"} onChange={(e)=>handleSelect(e)} required>
            {props?.defValue && <option className="capitalize" value={props.defValue}>{props.defValue}</option>}
            <option value="incomplete">Incompleted</option>
            <option value="complete">Completed</option>
        </select>
    )
}
