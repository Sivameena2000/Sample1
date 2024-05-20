import Destruct from "./Destruct"

function Destructuringpage() {
    const userdata={
        name:'xxx',
        age:"yyy",
        occupation:"zzz"

    }
  return (
   <>
   <Destruct {...userdata}/>
   </> 
  )
}

export default Destructuringpage