import React, {useState} from "react";


export default function Input(props) {
  //document.write(data.id)
  //console.log("from child ",props.id);
const xyz=(e)=>{
//console.log(e.target.value);
e.preventDefault();
props.change(e);


}

  
  return (
    <div>
      <input type="number" id={props.id} value={props.value} onChange={xyz}/>
    </div>
  );
}

