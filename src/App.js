import './App.css';
import React,{useState,useEffect} from 'react';
import { Route,Switch } from 'react-router-dom';
import Student from './Components/studentlist';
import Edit from './Components/editstudent';
import Addstudent from './Components/addstudent';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login.js';
import SignUp from './Components/SignUp';

function App() {

  let [students,setstudents]=useState([]);

  useEffect(()=>{
    let getStudents = async () =>{
        let response = await fetch("https://student-teacher-backend.vercel.app/api/user/allstudent", {
          method:"GET",
        }); 
        let data = await response.json();
        if(data){
          setstudents(data.data)
        }
        else{
          setstudents([])
        }
    }

    getStudents();
  }, [])
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path ="/signup">
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
        <Route  path="/edit_student/:id">
          <Edit
          state={students}
          setstate={setstudents}
          />
        </Route>
        <Route  path="/add_student">
          <Addstudent
          state={students}
          setstate={setstudents}
          />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
