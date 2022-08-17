import React, {useState} from 'react'
import './style.css'
const TodoListForm = (props) => {

    const[task, setTask] = useState()
    
    const handleChangeTask = (event) => {
        let newTask = event.target.value
            setTask(newTask)
        }

    const handleAddTaskList = () =>{
        if(task !== ""){
            props.addTaskList(task)
            setTask('')
        }
    }

    return (
        <form >
            <input className='input-task' type="text" placeholder="Adicionar Tarefas"
                value={task} onChange={handleChangeTask}
            />
            <button type="button" className='button-task' onClick={handleAddTaskList}>Adicionar</button>
        </form>
    )
}

export default TodoListForm