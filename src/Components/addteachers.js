import { useHistory } from 'react-router-dom';
import Base from "../Basic/base";
import React from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik';

let formvalidation=yup.object({
    name:yup.string().required("Please fill in student name"),
    batch:yup.string().required("Please fill in the student batch").min(5,"please enter a valid batch"),
    qualification:yup.string().required("Please fill in the student qualification"),
    gender:yup.string().required("Please fill in the student gender")
})

function Addteachers({state,setstate}){
    let history = useHistory()
    let {handleSubmit,values,handleChange,errors,handleBlur}=useFormik({
        initialValues:{
            name:"",
            batch:"",
            gender:"",
            qualification:""
        },
        validationSchema:formvalidation,
        onSubmit:(obj)=>{
            add(obj)
        }
    })

    async function add(obj){
        let response = await fetch("https://644b33c017e2663b9deab958.mockapi.io/student_teacher", {
        method:"POST",
        body:JSON.stringify(obj),
        headers :{
            "Content-Type":"application/json"
        },
        })
        let data = await response.json()
        setstate([...state,data])
        history.push("/teacher_list")
    }
    return(
        <Base
        title="Add Teacher"
        content="New teacher name shuold be adding here"
        >
        <div className="input_box">
        <form onSubmit={handleSubmit}>
        <input
            name="name"
            type="name"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
            className="input"
            onBlur={handleBlur}
            /> 
            <div style={{color:"red"}}>
            {errors.name?errors.name:""}
            </div>
            <br/>
            <input
            name="batch"
            type="batch"
            placeholder="Batch"
            value={values.batch}
            onChange={handleChange}
            className="input"
            onBlur={handleBlur}
            /> 
            <div style={{color:"red"}}>
            {errors.batch?errors.batch:""}
            </div>
            <br/>
            <input
            name="gender"
            type="gender"
            placeholder="Gender"
            value={values.gender}
            onChange={handleChange}
            className="input"
            onBlur={handleBlur}
            /> 
            <div style={{color:"red"}}>
            {errors.gender?errors.gender:""}
            </div>
            <br/>
            <input
            name="qualification"
            type="qualification"
            placeholder="Qualification"
            value={values.qualification}
            onChange={handleChange}
            className="input"
            onBlur={handleBlur}
            /> 
            <div style={{color:"red"}}>
            {errors.qualification?errors.qualification:""}
            </div>
            <br/>
            <button className="add" type="Submit">Add</button>
            </form>
        </div>
        </Base>
    );
}

export default Addteachers;