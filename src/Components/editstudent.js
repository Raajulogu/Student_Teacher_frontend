import Base from "../Basic/base";
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

function Edit({state,setstate}){
    let history=useHistory()
    let {id}=useParams();
    let updatestudent=state[id];
    let [name,setname]=useState("");
    let [batch,setbatch]=useState("");
    let [gender,setgender]=useState("");
    let [qualification,setqualification]=useState("");

    useEffect(()=>{
        setname(updatestudent.name)
        setbatch(updatestudent.batch)
        setgender(updatestudent.gender)
        setqualification(updatestudent.qualification)
    },[updatestudent])
    async function update(){
        let obj={
            name,
            batch,
            gender,
            qualification
        };
        let response = await fetch(`https://644b33c017e2663b9deab958.mockapi.io/users/${updatestudent.id}`, {
      method:"PUT",
      body:JSON.stringify(obj),
      headers:{
        "Content-Type":"application/json"
      }
     })

     let data = await response.json()
        state[id]=data;
        setstate([...state])
        history.push("/student_list")
    }

    return(
        <Base
        title="Students Updation"
        content="Students deatils updated here !"
        >
        <div className="input_box">
            <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e)=>setname(e.target.value)}
            className="input"
            /> 
            <br/>
            <input
            type="text"
            placeholder="Batch"
            value={batch}
            onChange={(e)=>setbatch(e.target.value)}
            className="input"
            /> 
            <br/>
            <input
            type="text"
            placeholder="Gender"
            value={gender}
            onChange={(e)=>setgender(e.target.value)}
            className="input"
            /> 
            <br/>
            <input
            type="text"
            placeholder="Qualification"
            value={qualification}
            onChange={(e)=>setqualification(e.target.value)}
            className="input"
            /> 
            <br/>
            <button className="edit" onClick={()=>update()}>Update</button>
        </div>
        </Base>
    );
}

export default Edit;