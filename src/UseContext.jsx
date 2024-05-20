import React, { createContext, useState } from 'react'
const userContext=createContext()
function UseContext() {
  const [user,Setuser]=useState("Usecontext")
  return (
    <>
    <userContext.Provider value={user}>
    <h1>Props using UseContext</h1>
    <Comp1></Comp1>
    </userContext.Provider>
    
    </>
  )
}
function Comp1()
{
    return(
    <>
    <h2>Props using UseContext1</h2>
    <Comp2></Comp2>
    </>
    );
}
function Comp2()
{   
    const Coursename=UseContext(userContext)
    return(
        <>
        {Coursename}
        <h1>props usecontext</h1>
        </>
    );
}

export default UseContext