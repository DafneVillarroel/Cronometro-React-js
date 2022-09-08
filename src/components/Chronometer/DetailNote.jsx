import React from 'react'
import { useEffect, useState } from 'react'


const DetailNote = ({detail,deleteListNote,id,timeList}) =>{

    const deleteItem = () =>{
        deleteListNote(id)
    }

    return(
    <div>
     <span> {id} - </span>
    <span>{detail}</span>
    <span onClick={deleteItem}> Delete Note</span>
    </div>)
    
}

export {DetailNote}