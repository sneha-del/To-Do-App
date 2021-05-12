
import React, { useState } from 'react';
export const AddTodo = (props) => {
const [title, setTitle] = useState("");
const [desc, setDesc] = useState("");
    
const submit=(e)=>{
e.preventDefault();//page will not reloadcdd
if(!title || !desc)
{
    alert("Title or Description cannot be empty !");
}
else{
props.addTodo(title,desc);
// title="";
// desc="";
setTitle("");
setDesc("");
}
    }
    return (
        <div className="container my-3">
            <h3 className="text-center my-5">Add your To-Do</h3>
            <form onSubmit={submit}>
            {/* <form> */}
  <div className="mb-3">
    <label htmlFor="title" className="x form-label">ToDo Title</label>
    <input type="text" value={title} onChange={(e)=>
    {setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>

  </div>
  <div className="mb-3">
    <label htmlFor="desc" className=" x form-label">ToDo Description</label>
    <input type="text" value={desc} onChange={(e)=>
    {setDesc(e.target.value)}} className="form-control" id="desc"/>
  </div>
 {/* kjdsdddddddddddddddddddddddd */}

  <button type="submit" className="btn btn-sm btn-primary">Add Todo</button>
</form>
        </div>
    )
}
