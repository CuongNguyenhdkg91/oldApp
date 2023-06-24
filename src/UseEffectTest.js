//import { useState, useEffect } from 'react'
import { ReTimeline } from './timeline.js'
import React from "react";
//import { Routes, Route, useParams } from 'react' //khai báo import cho usePrams không đúng
//import { useParams } from "react"; //khai báo import cho usePrams không đúng
import { useEffect } from "react";
import { useParams } from 'react-router-dom'


export default function DynamicTimeline(){
/*     const [Data]=useState([])
    const [ActPLoai]=useState('Ploai') */
    const {keyword} = useParams()
/*     useEffect(() => {
        console.log("Working?")
      })  */
    return(
        <ReTimeline keyword = {keyword}/>
    )
}
