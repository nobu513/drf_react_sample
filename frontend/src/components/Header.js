import { TextField } from '@material-ui/core'
import axios from 'axios'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'


const Header = () => {
    const [isModal, setIsModal] = useState(false)
    const [title, setTitle] = useState()
    const [text, setText] = useState()
    const [priority, setPriority] = useState()

    const toggleModal = () => {
        setIsModal(!isModal);
    }
    const modalStyle = {
        position:"absolute",
        top:0,
        left:0,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        width:"100%",
        background: "rgba(0, 0, 0, 0.5)", 

    }

    const modalInnerStyle = {
        background:"#eee",
        borderRadius:"4px",
        padding:"10px",

    }

    const createTask = async (event) => {
        try{
        
            const res = await axios.post('http://localhost:8000/api/create/', {
                title:title,
                text:text,
                priority:priority,
            }, {
                headers:{"Content-Type":"application/json"}
            })
            window.location.href = '/'

            
        } catch {
            console.log('errrrrroror')
            console.log(title, text, priority)
           
        }
        
    }

    return (
        <div style={{textAlign:"center"}}>
            <h2><Link to="/">Tasks</Link> | <Link to="/about">About</Link></h2>
            
            <button style={{marginBottom:'10px'}} onClick={()=>toggleModal()}>新規追加</button>
           
            {isModal 
            ? <div style={modalStyle}>
                <div style={modalInnerStyle}>
                    <h2>新規追加</h2>
                    <a onClick={()=>toggleModal()} style={{cursor:'pointer'}}>go back</a>
                    <br></br>
                    <br></br>
                    <input type="text" placeholder="title" name="title" onChange={(e)=>setTitle(e.target.value)} />
                    <br></br>
                    <input type="text" placeholder="text" name="text" onChange={(e)=>setText(e.target.value)} />
                    <br></br>
                    <select onChange={(e)=>setPriority(e.target.value)}>
                        <option value="#A6EB99">middle</option>
                        <option value="#F4B9C2">high</option>
                        <option value="#F8F8FE">low</option>
                    </select>
                    <br></br>
                    <button onClick={()=>createTask()}>保存</button>
                </div>
            </div>
            : ""}
            
           
            
        </div>
    )
}

export default Header
