import React,{useState} from 'react';

function ToDo(){

    const [tasks,setTasks] = useState([{text:"", completed:false}]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [newTask, setNewTask] = useState('');
    //const [count, setCount] = useState();
    const [filter, setFilter] = useState('all');

    function handleAddTask(){
        const newTaskText = document.getElementById("newInput").value;
        document.getElementById("newInput").value = "";

        const newTask = { text: newTaskText, completed: false };
        setTasks(t => [...t, newTask]);
    }


    function handleSaveTask(index){
        const newTasks = [...tasks];
        newTasks[index].text = newTask;
        setTasks(newTasks);
        setEditingIndex(null);
        setNewTask('');
    }

    function handleDeleteTask(index){
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);

    }

    function handleEditTask(index){
        setEditingIndex(index);
        setNewTask(tasks[index].text);
    }

    function handleToggleComplete (index) {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    }

    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
      });


    return(
        <div className="todo-container">
            <h1> To-Do List </h1>
            <h2>What Needs to be Done?</h2>

            <ul>
                {filteredTasks.map((task,index) => 
                <li className='list-items' key={index}>
                    <input type="checkbox" checked={task.completed}
              onChange={() => handleToggleComplete(index)}/>
                    {editingIndex === index ? (
                    <>
                        <input type="text" value={newTask} 
                            onChange={(e) => setNewTask(e.target.value)} /><br />
                        <button className="button" onClick={() => handleSaveTask(index)}>Save</button>
                    </>
                    ) : (
                    <>
                    <span>{task.text}</span>
                    <button className="button" onClick={() => handleEditTask(index)}>Edit</button>
                    </>
                    )}
                    <button className="button1" onClick={() => handleDeleteTask(index)}>Delete</button>
                </li>
                    )}
            </ul>
            <div className='todo-input'>
                <input type="text" id= "newInput"  placeholder='Enter the task'/>
                <button className="button" onClick={handleAddTask}>Add</button><br />
                <button className='counter-button' aria-pressed="true" onClick={() => setFilter('all')}>Show all tasks</button>
                <button className='counter-button' aria-pressed="true" onClick={() => setFilter('active')}>Show active tasks</button>
                <button className='counter-button' aria-pressed="true" onClick={() => setFilter('completed')}>Show Completed tasks</button>
                

            </div>
        </div>
        

    )

}

export default ToDo;
