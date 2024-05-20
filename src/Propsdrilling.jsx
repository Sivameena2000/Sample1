import React, { useState } from 'react'

function Propsdrilling() {
    const[user,setuser]=useState("Props Drilling")
  return (
    <>
    <h1>props drilling </h1>

    <Comp1 u={user}></Comp1>
    </>
  )
}
function Comp1({user})
{
    return(
    <>
    <h2>Props Drilling</h2>
    <Comp2 u1={user}></Comp2>
    </>
    );
}
function Comp2({user})
{
    return(
    <>
    {user}
    <h3>Props Drilling</h3>
    </>
    );
}

export default Propsdrilling