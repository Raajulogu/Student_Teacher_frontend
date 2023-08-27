import React from "react";
import { useHistory } from "react-router-dom";

function Base({title,content,children}){
    let history=useHistory();
    return(
        <div>
            <div className="nav_bar">
                <button id="nav" onClick={()=>history.push("/dashboard")} >Dashboard</button>
                <button id="nav" onClick={()=>history.push("/student_list")} >Students List</button>
                <button id="nav" onClick={()=>history.push("/teacher_list")} >Teachers List</button>
            </div>

            <div className="title">
            <h1>{title}</h1>
            <h3>{content}</h3>
            </div>

            <div className="main-content">{children}</div>
        </div>
    );
}

export default Base;