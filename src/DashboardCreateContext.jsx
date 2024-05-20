import React, { useState } from 'react'
import CourseContext from './CreateContext'
import Comp1 from './Comp1'

function DashboardCreateContext() {
    const[Coursename,setcoursename]=useState('React')
  return (
    <>
    <CourseContext.provider value={Coursename}>
        <Comp1></Comp1>
    </CourseContext.provider>
    </>
  )
}


export default DashboardCreateContext