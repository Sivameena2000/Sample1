import React,{useState} from 'react'

function Hookarray() {
    // const[sname,setname]=useState(" ")
    const[item,setitem]=useState([])
    const [output,setOutput]=useState('')
    // const user=(e)=>{
    //  setitem(e.target.value)
    // }
    const display=(e)=>{
        console.log("successfully");
        setOutput(e.target.value)
    }
    const submit=()=>
    {
        // setitem([...item,{[username]:sname}])
        
        setname('');
    }
    
  return (
    <>
    <input type="text" value={output} onChange={display} />
    <button onClick={submit}>submit</button>

    </>
  )
}

export default Hookarray