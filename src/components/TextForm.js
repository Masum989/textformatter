import React ,{useState} from 'react'


function TextForm(props) {
    const [text,setText]=useState("");
     
     const handleUpClick =()=>{
        let upperText = text.toUpperCase(); 
        setText(upperText);
        props.showAlert("Converted to uppercase","success")

     }
     const handleDownClick =()=>{

        let lowerText = text.toLowerCase(); 
        setText(lowerText);
        props.showAlert("Converted to lowercase","success")


     }
     const handleClearClick=()=>{
        let clearText = '';
        setText(clearText);
        props.showAlert("Text cleared","success")

     }
     const handleExtraSpace=()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra space removed","success")

   }
     const handleCopy=()=>{
      let copyText = document.getElementById('myBox');
      copyText.select();
      copyText.setSelectionRange(0,9999);
      navigator.clipboard.writeText(copyText.value)
      props.showAlert("Text copied ","success")

   }
     const handleChange=(event)=>{
        setText(event.target.value);
     }

  return (
    <>
    <div className='container'style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className='mb=3'>
            <label htmlFor="myBox" className='form-label'></label>
            <textarea className='form-control' value={text} onChange={handleChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'grey'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleDownClick}>Convert to LowerCase</button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleExtraSpace}>Remove spaces</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary is here</h2>
         <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words and  {text.length} character</p> 
         {/* I have used filter to fix the words size which was giving 1 if there was no any words also  */}
         <p>{0.008 *text.split(" ").length} Minutes to read</p>
         <h2>Preview</h2>
         <p>{text.length>0?text:"Enter your text to preview here"}</p>
    </div>

    </>
  )
}

export default TextForm