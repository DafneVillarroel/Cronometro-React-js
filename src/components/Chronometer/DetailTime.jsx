import React from 'react'
import { useEffect, useState } from 'react'


const DetailTime = ({detail,id,deleteListTime}) =>{

    const deleteItem = () =>{
        deleteListTime(id)
    }
    
    return(

    <div>
          <span> {id} - </span>
         <span>{("0" + Math.floor((detail / 60000) % 60)).slice(-2)}:</span>
         <span>{("0" + Math.floor((detail / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((detail / 100) % 100)).slice(-2)}</span>
          <span onClick={deleteItem}> Delete Time </span>
          
     </div>)
    
}

export {DetailTime}