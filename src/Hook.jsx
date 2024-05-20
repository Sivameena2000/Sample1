 import React,{useState} from 'react'

function Hook() {
   const[show,setshow]=useState(false)
    const[book,setBook]=useState({
        bookAuthor:'',
        bookname:''    
        
    });
    const update=(e)=>
    {
        setBook({...book,bookAuthor:e.target.value})    

    }
    const nameupdate=(e)=>
    {
     setBook ({...book,bookname:e.target.value})
    }
    const submit=()=>{
      setshow(true)
    }
  return (
    <>
    <input type="text" value={book.bookAuthor} onChange={update}/>
    <input type="text" value={book.bookname} onChange={nameupdate}/> 
     
    <button type="submit" onClick={submit}>Submit</button>
    {
      show ?
      <h1>{book.bookAuthor}{book.bookname}</h1>
      :
      " "
    }
    </>
  )
}

export default Hook