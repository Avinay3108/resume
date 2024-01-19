import { useEffect, useRef } from "react"
import "./intro.scss"
import { init } from 'ityped'
export default function Intro() {

  const textRef = useRef();


  useEffect(() => {
    init(textRef.current, {
       showCursor: true, 
        backDelay: 1500,
       strings: ['Developer', 'Designer', 'Content Creator'] 
      }); 

  },[])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="./images/vinni.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Vinay Pathania</h1>
          <h3>Frontend  <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="./images/down.png" alt="" />
        </a>
      </div>

    </div>
  )
}
