import React from "react";
import { useState, useEffect } from "react";
import { useContentContext } from "../../Context/context";
import './timer.css'

const Timer = () =>  {
  const {initial,timeOn,setTimeOn, counter,chronoOn} = useContentContext();

  const totalTime = 5;
    let [timeLeft, setTimeLeft] = useState(totalTime)
   

    useEffect(()=>{
     setTimeLeft(totalTime);     
    },[timeOn]);

    const startTimer = () => {
      if(timeOn){
        setTimeout(() => {
          if (timeLeft > 0) {
              setTimeLeft(timeLeft -= 1);
          }
      }, 1000)
      }
    }

    const timeFormat = (time) => {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;
    }

    startTimer();


  
    return (
     
        <div className='count-container'>
          <div className="content">
          <h1 className="title">Timer</h1>
           <span>
            {timeFormat(timeLeft)}
           </span>
        </div>
        <div>
        {!(timeOn) && (
         <div className="timerButton">
         <div><button className="count-container__button" 
         onClick={()=> setTimeOn(true)}  disabled={counter < initial || chronoOn ? true : null}><span className="text">Start</span></button>
         </div>
         </div>
        )}
         {(timeOn) && (
        <div className="timerButton">
        <div><button className="count-container__button" onClick={()=> setTimeOn(false)}><span className="text">Stop</span></button>
        </div>  
        </div>
        )}       
         {/* {(timeOn  && timeLeft === 0 )?(
               <div className="timerButton">
               <div><button className="alert" onClick={()=> setTimeOn(false)}><span className="text">Timer ok</span></button>
               </div>  
               </div>
            ):(null)} */}
          {(timeOn  && timeLeft === 0 )&&(
                
               <div className="timerButton">
               <div><button onClick={()=> {
                                  setTimeOn(false) }}>
                                  <span className="text">Timer ok</span></button>
               </div>  
               </div>
            )}
            
        </div>
     </div>

    );
  }



export {Timer};

