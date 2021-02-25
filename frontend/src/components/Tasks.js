import {React, useEffect, useState, useMemo } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {AiTwotoneDelete, AiFillEdit} from 'react-icons/ai'
const UlStyle = styled.ul`
    padding:0;
    margin:0;
    li:last-child {
        display:none;
    }
`

const Tasks = () => {
    
    const [tasks, setTasks] = useState([])
    const [editedTask, setEditedTask] = useState("")
    const [isEdit, setIsEdit] = useState()
    useEffect(()=>{
        axios.get('http://localhost:8000/api/tasks/', {
            headers:{"Content-Type":"application/json"},
        }).then(res=>{
            const tasks = res.data;
            setTasks([...tasks, tasks]);
        })
       
    }, [])



    const editTask = async (task) => {
        const res = await axios.put(`http://localhost:8000/api/task/${task.id}/`, {
            title:editedTask,
            text:task.text,
            priority:task.priority
        }, {
            headers:{"Content-Type":"application/json"}
        })
        setEditedTask("")
        setIsEdit()
        window.location.href = "/"
    }
    const deleteTask = async (task) => {
        const res = await axios.delete(`http://localhost:8000/api/task/${task.id}`, {
            headers:{"Content-Type":"application/json"}
        })
        window.location.href = '/'
    }
    
   const inputEditValue = (event) => {
        event.preventDefault()
        setEditedTask(event.target.value)
   }

   const Edithandler = (task) => {
       setEditedTask(task.title)
       setIsEdit(task.id)
   }

    return (
        <div>
        
            
            <UlStyle>
            {
                tasks 
                ? tasks.map((task, index)=>{
                    return (
                    
                        <li style={{listStyle:"none", padding:"10px", margin:'5px', borderLeft:`5px solid ${task.priority}`, background:'#F1F1F1'}} key={index}>
                            {isEdit === task.id ? <input autoFocus={true} type="text" value={editedTask} onChange={(event)=>inputEditValue(event)}/> : task.title}
                        <AiTwotoneDelete onClick={()=>deleteTask(task)} style={{float:'right',paddingLeft:'5px', color:'#eb144c'}}/>
                        {isEdit === task.id ? <button onClick={()=>editTask(task)} style={{float:'right'}}>save</button> :

                        <AiFillEdit style={{float:'right', color:'#40bf91'}} onClick={()=>Edithandler(task)} /> }
                       
                        </li>
                        
                       
                    )
                })
                : "no results."
            }
            </UlStyle>

        </div>
    )
}

export default Tasks
