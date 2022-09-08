import React from 'react';
import  { useState, useEffect } from "react";
import { useContentContext } from '../../Context/context';
import {DetailNote} from './DetailNote'
import {DetailTime} from './DetailTime.jsx'
import '../Chronometer/chronometer.css';
import '../Counter/Counter';

const Chronometer = () => {
    const {initial,timeOn, counter,chronoOn, setChronoOn} = useContentContext();
 
    const [time, setTime] = useState(initial);

    const [inputText, setInputText] = useState("")

    
    const [timeList, setTimeList] = useState([])
    const newTime = (lap) =>{
      setTimeList([lap, ...timeList])
   }

    const [list, setList] = useState([])
    const newList = (lap) => {
        setList([lap, ...list])
    }
    

    const manejarForm = (event)=>{
        setInputText(event.target.value)
    }

    const submit = (event) =>{
        event.preventDefault();
        newTime(inputText);
        newList(time)
        setInputText("")
    }

    useEffect(()=>{
      let interval = null;
      if(chronoOn){
         interval = setInterval(()=>{
          setTime(prevTime => prevTime + 10);
         },10)
      }else{
         clearInterval(interval);
      }
       return()=>clearInterval(interval)
    },[chronoOn]);

    const deleteListNote = (id) => {
      const filteredListNote = timeList.filter((e,index) =>index!== id);
      setTimeList(filteredListNote)
    }

    const deleteListTime = (id) => {
      const filteredListTime = list.filter((e,index) =>index!== id);
      setList(filteredListTime)
    }
  
  return (   
    <div className="count-container">
        <div>
        <div className='content'>
         <h1 className='title'>Chronometer</h1>
         <div className='count-container__qty'>
           <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
           <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
           <span>{("0" + Math.floor((time / 100) % 100)).slice(-2)}</span> 
        </div>
        </div>
    <div className='count-container__chrono'>
    
      {!chronoOn && (
         <div className='chronoButton'>
         <div><button className="count-container__button" 
         onClick={()=> setChronoOn(true)} disabled={counter < initial || timeOn === true ? true : null}><span className="text">Start</span></button>
       </div>
        </div>
      )}
      
       {chronoOn && (
       <div><button className="count-container__button" onClick={()=> setChronoOn(false)}><span className="text">Stop</span></button>
       </div>  
      )}
  
    </div>
   
      <div>
                <form className='form' onSubmit={submit}>
                    <input value={inputText} onChange={manejarForm} />
                    <button className='btn'>Vuelta</button>
                   

                    <div className='ListDetails'>
                        <div>
                            {timeList.map((e,index) => <DetailNote
                                                    timeList={timeList}
                                                    detail={e}
                                                    deleteListNote={deleteListNote}
                                                    id={index}
                                                     />
                            )}
                        </div>
                        <div>
                            {list.map((e , index)=> <DetailTime
                                                    detail= {e}
                                                    id={index}
                                                    deleteListTime={deleteListTime}
                                                    /> )}
                        </div>
                    </div>
                </form>
            </div>

    </div>
    </div>
  );
 
};

export {Chronometer};
