import React from "react";
import Base from "../Basic/base";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useHistory} from 'react-router-dom'



function Student({teachers,setteachers}){
    let history=useHistory()
    async function Delete({index}){
        let response = await fetch(`https://644b33c017e2663b9deab958.mockapi.io/student_teacher/${index}`, {
         method:"DELETE",
      });

    await response.json()

        let data=teachers.filter((value,idx)=>idx!==index);
        setteachers(data);
    }
    return(
        
        <Base
        title="Teachers List"
        content="Teachers list is available here"
        >
            <button className="addteacher" onClick={()=>history.push("/add_teachers")}>Add teachers</button>
            <div className="card-container">
                {teachers.map((teach,index)=>(
                    <Card className="teacher" style={{ width: '18rem' }} key={index}>
                    <Card.Body>
                    <div className="content">
                    <Card.Title><b>Name: </b>{teach.name}</Card.Title>
                    <Card.Text><b>Batch: </b>{teach.batch}</Card.Text>
                    <Card.Text><b>Gender: </b>{teach.gender}</Card.Text>
                    <Card.Text><b>Qualification: </b>{teach.qualification}</Card.Text>
                    </div>
                    <Button className="editteacher" variant="primary" onClick={()=>history.push(`/edit_teachers/${index}`)}>Edit</Button>
                    <Button className="deleteteacher" variant="primary"onClick={()=>Delete({index})}>Delete</Button>
                    </Card.Body>
                    </Card>
                ))}
            
            </div>
        
        </Base>
        
    );
}

export default Student;