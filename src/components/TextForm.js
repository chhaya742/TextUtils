import React,{ useState } from 'react'

export default function TextForm(props) {
  const handlUpClick=()=>{
    console.log("uparcase was clicked");
    let newText=text.toUpperCase();
    setText(newText )
  props.showAlert("Converted to Uppercase","success")
  }

  const handlLoClick=()=>{
    console.log("lowecase was clicked");
    let newText=text.toLowerCase();
    setText(newText )
    props.showAlert("Converted to Lowercase","success")
  }
  const handlClearClick=()=>{
    let newText='';
    setText(newText )
  }
  const handlSnakeClick=()=>{
    const ntext = text.split(' ');
   const snakeArr = ntext.reduce((acc, val) => {
      return acc.concat(val.toLowerCase());
      
   }, []);
   
    let newText=snakeArr.join('_');
    setText(newText )
    props.showAlert("Converted to Snake case","success")
  }
  const handlTitleClick=()=>{
      const Ntext = text.toLowerCase().split(' ');
      for (var i = 0; i < Ntext.length; i++) {
        Ntext[i] = Ntext[i].charAt(0).toUpperCase() + Ntext[i].slice(1); 
      }
    let newText= Ntext.join(' ');
    setText(newText )
    props.showAlert("Converted to Title case","success")
  }
  const handleOnChange=(event)=>{
    console.log("You Have Clicked On onChange");
    setText(event.target.value)
    
   
  }
  
  const[text,setText]=useState("")
  return (
    <>
     <div className='container' style={{color:props.mode==='dark'?'white':'#2e68a3'}} >
        <h>{props.heading}</h>
        <div className="mb-3">
            {/* <label for="myBox" class="form-label">Example textarea</label> */}
            <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',
            color:props.mode==='dark'?'white':'#2e68a3'}} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handlUpClick}>Upper case </button>
        <button className='btn btn-primary mx-2' onClick={handlLoClick}> Lower case </button>
        <button className='btn btn-primary mx-2' onClick={handlClearClick}> Clear </button>
        <button className='btn btn-primary mx-2' onClick={handlSnakeClick}>Snake case </button>
        <button className='btn btn-primary mx-2' onClick={handlTitleClick}>Title case </button>
    </div>
    <div className='container mb-3' style={{color:props.mode==='dark'?'white':'black'}} >
      <h2> Your Text summery</h2>
      <p> Words {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} And {text.length} Characters</p>
      <p> {0.008 * text.split(" ").length}Minuts to Read</p>
      <h2>Preview</h2>
      <p>{text}</p>


    </div>
    </>
   
  )
}
