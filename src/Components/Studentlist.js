import React, { useState } from 'react';
import StudentDb from './StudentDb';

const Studentlist = () => {
    const data=[{name:'Maizul Islam', id:'19-41002-2', cgpa:'3.99'},{name:'Bruce Wayne', id:'19-41003-2', cgpa:'4'},{name:'Tony Stark', id:'19-41004-2', cgpa:'4'}]
    const [studentdb]=useState(data)
    return (
        <div>
            {studentdb.map(student => <StudentDb students={student} />)}
            
        </div>
    );
};

export default Studentlist;