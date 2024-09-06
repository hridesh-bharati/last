import React from 'react';
import CommanCourse from './CommanCourse';

export default function Nielet() {
    const targetCourses = ['CCC', 'O LEVEL']; 
       const CTitle = 'Nielit'
    return (
        <div className='MT3'>
            <CommanCourse targetCourses={targetCourses} CTitle={CTitle}/>
        </div>
    );
}
