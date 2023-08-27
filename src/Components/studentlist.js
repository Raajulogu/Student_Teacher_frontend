import React from "react";
import Base from "../Basic/base";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useHistory} from 'react-router-dom'



function Student({students,setstudents}){
    let history=useHistory()
    async function Delete({index}){

        let response = await fetch(`https://644b33c017e2663b9deab958.mockapi.io/users/${index}`, {
         method:"DELETE",
      });

      await response.json()

        let data=students.filter((value,idx)=>idx!==index);
        setstudents(data);
    }
    return(
        
        <Base
        title="Student List"
        content="Students list is available here"
        >
            <button className="addstudent" onClick={()=>history.push("/add_student")}>Add Students</button>
            <div className="card-container">
                {students.map((stud,index)=>(
                    <Card className="student" style={{ width: '18rem' }} key={index}>
                    <Card.Body>
                    <div className="content">
                    <Card.Title><b>Name: </b>{stud.name}</Card.Title>
                    <Card.Text><b>Batch: </b>{stud.batch}</Card.Text>
                    <Card.Text><b>Gender: </b>{stud.gender}</Card.Text>
                    <Card.Text><b>Qualification: </b>{stud.qualification}</Card.Text>
                    </div>
                    <Button className="editstudent" variant="primary" onClick={()=>history.push(`/edit_student/${index}`)}>Edit</Button>
                    <Button className="deletestudent" variant="primary"onClick={()=>Delete({index})}>Delete</Button>
                    </Card.Body>
                    </Card>
                ))}
            
            </div>
        
        </Base>
        
    );
}

export default Student;