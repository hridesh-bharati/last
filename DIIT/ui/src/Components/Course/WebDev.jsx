import React from 'react';
import CommanCourse from './CommanCourse';

export default function WebDev() {
  const targetCourses = ['python', 'REACTJS', 'ANGULAR', 'JAVASCRIPT', 'NODEJS', 'PHP'];
  const CTitle = 'Web Development'
  return (
    <div className='MT3'>
      <CommanCourse targetCourses={targetCourses}  CTitle={CTitle} />
    </div>
  );
}
