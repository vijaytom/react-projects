export default function TodoStatus(props) {
    return (
        <select defaultValue={{ value: props.defValue }} className={props.class + " capitalize"} required>
            {props.defValue === 'filter' && <option className="capitalize" value={props.defValue}>{props.defValue}</option>}
            <option value="incomplete">Incompleted</option>
            <option value="complete">Completed</option>
        </select>
    )
}
