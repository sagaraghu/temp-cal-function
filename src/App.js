import React, {useState, useEffect} from "react";
import "./style.css";
import Input from './Input'

export default function App() {

  let [ce,setCe]=useState({id:'',c:'',f:'',k:''});
//  let [fa,setFa]=useState({id:'',c:0,f:0,k:0});
 // let [ke,setKe]=useState({id:'',c:0,f:0,k:0});
  
  const calculate=(e)=>{
  let targetval=parseInt(e.target.value);
  if(e.target.id=='c'){
  setCe({c:targetval,id:e.target.id,f:(targetval*9/5)+32, k:(targetval)+273.15})
  } 
  else if(e.target.id=='f'){
  setCe({c:(targetval*5/9)-32,id:e.target.id,f:targetval,k:c+273.15})
  }
    else{
  setCe({c:targetval-273.15,id:e.target.id,f:(c*9/5)+32,k:targetval})
  }
  
  }
 
 
  return (
    
    <div>
     <Input id={'c'} value={ce.c} change={calculate} />
     <Input id={'f'} value={ce.f} change={calculate} />
     <Input id={'k'} value={ce.k} change={calculate} />
    </div>
  );
}
