import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const AddTask = ({addTask})=>{
   const[value, updatevalue]= useState("")

   const handleSubmit = e =>{
    e.preventDefault();
    if(value !=="")
    {
        addTask(value)
        updatevalue("");
    }
   }


    return(
        <form  onSubmit={handleSubmit}>
            <input 
            type= "text"
            value = {value}
            placeholder = 'Enter the Task'
            onChange={e => updatevalue(e.target.value)}
            />
            <button type='submit'><i class ="Material-Icons">add</i> </button>

        </form>
    );
}


const ToDoList = ()=>{
    const addTask = text =>updateTask([...Task,{text}]);
    const[Task ,updateTask] = useState([
        {
            text:"Wake up",
            isCompleted:false
        },
        {
            text:"Fresh up",
             isCompleted:false
        },
        {
            text:"Boost up",
            isCompleted:false
        },
    ])
    const toggleTask= index =>{
        const newTask = [...Task]
        if(newTask[index].isCompleted)
        {
            newTask[index].isCompleted = false
        }
        else{
            newTask[index].isCompleted = true
        }
        updateTask(newTask);
    }
    const removeTask = index =>{
        const newTask = [...Task]
        newTask.splice(index, 1);
        updateTask(newTask)
    }

    return(
        <div className='React' >
            {Task.map((Task,index)=>(
                <div className='newreact'>
                    <span onClick={()=>toggleTask(index)} className={Task.isCompleted?"completed":"incompleted"}>
                    {Task.text}
                    </span>
                    <button onClick={()=> removeTask(index)}><i class = "Material-Icons">delete</i></button>
                </div>
            ))}
            <AddTask addTask={addTask}/>
        </div>
    )
}

ReactDOM.render(<ToDoList/>, document.getElementById('root'));