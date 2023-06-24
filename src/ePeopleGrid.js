//import { response } from 'express';//who insert this fucking error
import React,{Component} from 'react'
import {SlideImage} from './slideImage.js'
import {ReText} from './textbox.js'
import {tachten} from './utilityFunction.js'
//const datapost = require('./data.json')

export class RePeopleGrid extends Component{
    constructor(props){
    super (props);
    this.state = {unhide: false, newtext:this.props.NameSet, status: "PENDING",index:15,list:'abc'};
    this.updateWriting = this.updateWriting.bind(this);
    this.updateList = this.updateList.bind(this)
    this.updateStatus = this.updateStatus.bind(this);
    this.autoedit = this.autoedit.bind(this)
    
    }
      updateWriting(i,m,field){

        var newtext = this.state.newtext
        newtext[0][i][field] = m
        this.setState({newtext: newtext})

     //document.querySelector("[data-identifier=" + CSS.escape(this.props.identifier)+ "]").dataset.writing = m.target.value;
     }

     updateList(i,m,field){
      
      var newlist = m
      var newtext=[]
      var API_URL = ''

      //var len = newlist.split(/\r?\n|\r|\n/g).length
      //newtext=this.state.newtext.slice(len) //cut from
      //newtext=[this.state.newtext]
      //newtext = newtext.slice(0,len)

      newlist.split(/\r?\n|\r|\n/g).map((index,i) =>
      {
      console.log(index.split("-")[1])
      const APIvar = {"key1": `${index.split("-")[0]}`, "key2":`${index.split("-")[1]}`,"key3":`${index.split("-")[2]}`}



       API_URL = `https://localhost:5001/api/Datagriddd?key1=${APIvar.key1}&key2=${APIvar.key2}&key3=${APIvar.key3}`

        async function pushtext(){
       
        const promise = await fetch(API_URL)

        const data = await promise.json()
          if (typeof(data[0]) !== 'undefined')
          {
          newtext[i]=data
          }
          
        }
        pushtext().then(a => this.setState({list: newlist, newtext:newtext})) //khong chay neu thieu a =>
        
      })
  }

    
     
     updateStatus(newtext,i){
    
     var statuskey = "COMPLETEPENDING"; var newstatus = statuskey.replace(this.state.status,"")
     this.setState({status:statuskey.replace(this.state.status,"")})

 /*     var API_URL = 'https://localhost:44341/api/DataGriddd/?tablename=StaffName999&STT=999'
     var formatindex = ('000' + (this.state.index+1)).slice(-3)
     console.log(formatindex)
     API_URL = API_URL.replaceAll('999',formatindex)
     console.log(API_URL) 
     */

     var API_URL = 'https://localhost:5001/api/Datagriddd'

     const reqOp = {method: 'PUT',
     headers: {'Content-Type': 'application/json' },
     body: JSON.stringify(this.state.newtext[0][i])
    }

     fetch(API_URL,reqOp)
  }

    autoedit(i){

      var newtext = this.state.newtext
      var cur = newtext[i]
      console.log(cur)
      var API_URL = `https://localhost:5001/api/MatchCode/?tablename=NhanvienQLCV&ten=${cur.FullN}`
      console.log(API_URL) 

      fetch(API_URL)
      .then(response => response.json())
      .then(data => {if (typeof(data[0]) !== 'undefined' && data.length == 1) {    //dùng != không dùng <>

        console.log(typeof(data))

        cur.ma = data[0].ma
        cur.ten = data[0].ten

        newtext[i]=cur
        this.setState({newtext:newtext})
    }})

      
/*       var FirstN = cur.First
      if (FirstN.indexOf("(") > 0)
      {FirstN = FirstN.slice(0,FirstN.indexOf("(")-1).trim()} //báo lỗi nếu dùng search
     
      if (FirstN==tachten(cur.FullN))
      {cur.Last = cur.FullN.replace(FirstN,"").trim()} */
      
     }

    componentDidMount(){


    }

    render(){
      //var images = [...[name + " T.jpg"],...[name + " F.jpg"],...[name + " P.jpg"]];
      var list = {"list":`${this.state.list}`}
      console.log(this.state.newtext)
    return (
    <React.Fragment>
      <ReText writing = {list} field='list' height="3" updateWriting = {this.updateList} />
      {this.state.newtext.map((newtextgr,j) => 
      <>
      {newtextgr.map((newtext,i) =>
      <div class = 'FramePart' >
      
      {/* <SlideBox images = {images}/> */}
      <ReText id = {i} writing= {newtext} field = 'FullN' updateWriting = {this.updateWriting} height="3" />
      <ReText id = {i} writing= {{'First':`A${i}-${j}`}} field = 'First' updateWriting = {this.updateWriting} height="3" />
      <ReText id = {i} writing= {newtext} field = 'Last' updateWriting = {this.updateWriting} height="3" />
      <ReText id = {i} writing= {newtext} field = 'ma' updateWriting = {this.updateWriting} height="3" />
      <ReText id = {i} writing= {newtext} field = 'ten' updateWriting = {this.updateWriting} height="3" />
      <button class= "CheckIcon" onClick= {() => this.updateStatus(newtext,i)}>{this.state.status}</button>
      <button onClick= {() => this.autoedit(i)}>SỬA</button>
      </div>
      )}
      </>
    )}
    </React.Fragment>
      )}
    }



   
    
    
 