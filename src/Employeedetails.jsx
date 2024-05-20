import Employee from './Employee.jsx'
import Img from '/image.jpg'

function Employeedetails() {
    const Employeedetail={
        imgsrc: Img,
        name:'xxx',
        age:'yyy',
        occupation:'zzz'
    }
  return (
    <>

    <Employee {...Employeedetail}/>
    </>
  )
}

export default Employeedetails