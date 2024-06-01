export default function Header() {
    const List = (props)=>{
        return(<li key={props.id} className="cursor-pointer hover:text-fuchsia-600">{props.name}</li>)
    };
    return (
        <nav className="flex justify-between p-4 px-10">
            <img src="vite.svg" className="h-9 object-contain"></img>
            <ul className="flex space-x-10">
                <List id={1} name={'Home'}/>
                <List id={2} name={'About Me'}/>
                <List id={3} name={'My Home'}/>
                <li>
                    <button>Contact Hello</button>
                </li>
            </ul>
        </nav>
    )
}
