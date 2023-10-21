import Task from './Task.css'

export default function Task({title}){
    const task = useStore((store) =>
    store.tasks.find((task) => task.title === title))

    return(
        <div className="task">
            <div>{task.title}</div>
            <div className='buttonwrapper'>
                <div></div>
                <div className={className('status', task.state)}>{task.state}</div>
            </div>
        </div>
    );
}