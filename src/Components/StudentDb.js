import React from 'react';
import { Link } from 'react-router-dom';

const StudentDb=(props)=> {
    const {name,id,cgpa}=props.students;
    return (

        <Link to={"/studentdetails/"+id+"/"+name+"/"+cgpa}>
            <div className="studentlist">
            <p>Name: {name}</p>
            <p>ID: {id}</p>
            <p>CGPA: {cgpa}</p>
            </div>
        </Link>
    );
};

export default StudentDb;