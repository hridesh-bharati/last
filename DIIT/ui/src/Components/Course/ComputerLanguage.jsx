import React from 'react';
import CommanCourse from './CommanCourse';

export default function ComputerLanguage() {
    const targetCourses = ['DBI'];
    const CTitle = 'Progrmming Language'
    return (
        <div className='MT3'>
            <CommanCourse targetCourses={targetCourses} CTitle={CTitle} />
        </div>
    );
}
