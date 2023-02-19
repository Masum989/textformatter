import React from "react"


function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color:'#0427443',
    //     backgroundColor:'white'
       
    // })
    let myStyle = {
        color: props.mode==="dark"?'white':"#bf7b74",
        backgroundColor:props.mode==="dark"?'#bf7b74':'white'
    }

   
  return (
    <div className='container' style={myStyle} >
    <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
            <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                 Analyze your text here
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
               TextFormatter is a platform where you will get a lot of features to format your text in your own way like converting to uppercase, lowercase,removing extra space and so on.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Free to use
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                It is a free to use so you can use this in efficient way and and utilize your time to play with your text.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Browser Compatible
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                This works in any web browser such as Chrome, firefox, Internet Explorer Safari etc. It suits to count character in facebook, blog books excel etc.
            </div>
            </div>
        </div>
        </div>
        {/* <div className='container my-3'>
        <button onClick={toggleStyle} type='button' className='btn btn-primary'>{btntext}</button>
        </div> */}
    </div>
  )
}

export default About