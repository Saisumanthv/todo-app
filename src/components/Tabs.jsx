export function Tabs(props) {
    const { todos, tabSelected, setTabSelected } = props;
    const tabs = ['All', 'Open', 'Completed'];
    return(
        <nav className="tab-container">
            {tabs.map((tab, tabIndex) => {
                const noOfTasks = tab === "All"? todos.length:
                    tab === "Open"? todos.filter(task => !task.complete).length:
                    todos.filter(task => task.complete).length
                return(
                    <button onClick={()=>{setTabSelected(tab)}} key={tabIndex} className={"tab-button " + (tab === tabSelected? " tab-selected": "")}>
                        <h4>{tab} 
                            <span>({noOfTasks})</span>
                        </h4>
                    </button>
                )
            })}
            <hr/>
        </nav>
    )
}