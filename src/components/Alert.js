import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height:"50px"}}>
   { props.alert && // it is used when it satifies then after this one will run other wise no like if the value is null it will not work 
<div className= {`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>}
</div>
  )
}

export default Alert