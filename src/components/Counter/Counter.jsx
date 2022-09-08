import React from 'react';
import { useState } from 'react';
import '../Counter/Counter.css';
import '../Chronometer/chronometer';
import { useContentContext} from '../../Context/context'

const Counter = () => {

  const {add,initial, counter, setCounter} = useContentContext();


  return (
      
      <div className="count-container__counter">
      <div>
      <h1>Counter</h1>
      <span className="count-container__count">{counter}</span>
      </div>
         <div className='buttons'>
        <button
          className="count-container__button"
          onClick={() => add(-1)}
        >
          <span className="text">Decrease</span>
        </button>
        <button  className="count-container__button"
        onClick={() => {
          setCounter(initial);
        }}
        >
        <span class="text">Reset</span>
      </button>
        <button
          className="count-container__button"
          onClick={() => add(+1)}
        >
         <span className="text">Increase</span>
        </button>
      </div>
      </div>
     
  );
};

export {Counter};
