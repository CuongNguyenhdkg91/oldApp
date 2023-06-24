import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'

import {RePeopleGrid} from './ePeopleGrid.js'
import { ReItemGrid } from './eItemGrid.js'
import {ReList} from './eList.js'
import {ReSearch} from './eSearch.js'
import {ReBaocao} from './eBaocao.js'
import { ReTimeline } from './timeline.js'
import DynamicTimeline from './UseEffectTest.js'
import {fabricationStep, storage001, ParseText,item} from './Hauler.jsx'

window.React1 = require('react');

{/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}
//import { response } from 'express'; //who insert this fucking error

// const API_URL = 'http://localhost:3500/test'

const PostItems = [[{'first': 'Bao','last':'Hoang Xuan','full':'Hoang Xuan Bao'}]]
//const PostItems = [[{'first': 'Bao','last':'Hoang Xuan','full':'Hoang Xuan Bao'}],[1,2]]
const diItem = PostItems
//const Timeline = DynamicTimeline()
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(


  
 
    <BrowserRouter>
    
      <Routes>
    
      <Route exact path='/Peoplegrid' element = {<RePeopleGrid NameSet = {diItem} />} /> 

      <Route exact path='/ItemGrid' element = {<ReItemGrid NameSet = {diItem} />} />

      <Route exact path='/Joblist' element = {<ReList fabricationStep={fabricationStep} storage001 = {storage001} ParseText = {ParseText} />} />

      <Route exact path='/Searchlist' element = {<ReSearch item = {item}/>} />

      <Route exact path='/Timeline/:keyword' element = {<DynamicTimeline/>} />

      <Route exact path='/Baocao' element = {<ReBaocao ma_nv='HD00055'/>} />

      </Routes>
   
   </BrowserRouter>
 


/*    <React.StrictMode>
      <DynamicTimeline/>
   </React.StrictMode> */


)


