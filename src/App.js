import './App.css';
import React,{useState,useEffect} from 'react';
import { Route,Switch } from 'react-router-dom';
import Student from './Components/studentlist';
import Edit from './Components/editstudent';
import Addstudent from './Components/addstudent';
import Teachers from './Components/teacherlist.js'
import Dashboard from './Components/Dashboard';
import Addteachers from './Components/addteachers';
import EditTeachers from './Components/editteachers';
import Login from './Components/Login.js';
import SignUp from './Components/SignUp';

function App() {
  let [teachers,setteachers]=useState([])
  let [students,setstudents]=useState([]);

  useEffect(()=>{
    let getStudents = async () =>{
        let response = await fetch("https://644b33c017e2663b9deab958.mockapi.io/users", {
          method:"GET",
        }); 
        let data = await response.json();
        if(data){
          setstudents(data)
        }
    }
    let getTeachers = async () =>{
      let response = await fetch("https://644b33c017e2663b9deab958.mockapi.io/student_teacher", {
        method:"GET",
      }); 
      let data = await response.json();
      if(data){
        setteachers(data)
      }
  }

    getStudents();
    getTeachers();
  }, [])
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact ="/signup">
          <SignUp/>
        </Route>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
        <Route path="/student_list">
        <Student
          students={students}
          setstudents={setstudents}
          />
        </Route>
        <Route path="/teacher_list">
          <Teachers
          teachers={teachers}
          setteachers={setteachers}
          />
        </Route>
        <Route  path="/edit_student/:id">
          <Edit
          state={students}
          setstate={setstudents}
          />
        </Route>
  
        <Route path="/edit_teachers/:id">
        <EditTeachers
          state={teachers}
          setstate={setteachers}
          />
        </Route>
        <Route  path="/add_student">
          <Addstudent
          state={students}
          setstate={setstudents}
          />
        </Route>
        <Route  path="/add_teachers">
          <Addteachers
          state={teachers}
          setstate={setteachers}
          />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
