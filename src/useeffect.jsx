import React, { useEffect} from 'react'

function useeffect() {
    // const[product,setproduct]=useState( );
    useEffect(()=>{
    products()
    },[])
    }
   
function products(){
    console.log("welcome");
}
  return (
    <div>useeffect</div>
  )


export default useeffect