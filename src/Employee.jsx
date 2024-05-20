
import './EmployeeDet.css'
function Employee({name,age,occupation,imgsrc}) {
  return (
    <>
    <div id="container">
    <div className="image-div">
        <img src={imgsrc} height={130}/>
    </div>
    <div className="Detail-div">
        <label>Name:{name}</label><br/>
        <label>Age:{age}</label><br/>
        <label>Occupation:{occupation}</label>
    </div>
    </div>
    
    </>
  )
}

export default Employee