//import { response } from 'express';//who insert this fucking error
//import { response } from 'express';
import React,{Component} from 'react'
import {SlideImage} from './slideImage.js'
import {ReText} from './textbox.js'
import {tachten} from './utilityFunction.js'
//const datapost = require('./data.json')


export class ReItemGrid extends Component{
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
        newtext[i][field] = m
        this.setState({newtext: newtext})

     //document.querySelector("[data-identifier=" + CSS.escape(this.props.identifier)+ "]").dataset.writing = m.target.value;
     //renderTable();
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
        

        //if (index != ''){
        //console.log(index)
        API_URL = `https://localhost:5001/api/DataGriddd/?tablename=StaffInfo&len=1&index=${index}`

        async function pushtext(){
        //console.log(newlist)
        const promise = await fetch(API_URL)
        //.then(response => response.json())
        //.then(data => {
        const data = await promise.json()
        //console.log(data)
          if (typeof(data[0]) !== 'undefined')
          {
          //newtext.push(data[0]) //do tốc độ thực hiện async fetch mỗi lần khác nhau nên thứ tự push có thể bị thay đổi
          newtext[i]=data[0]
          
          }
          
        //console.log(newtext)
        }
        pushtext().then(a => this.setState({list: newlist, newtext:newtext})) //khong chay neu thieu a =>
        //pushtext().then(console.log(newtext))
        
      })
    
      
        //.then(len => console.log(len))
        //.then(a => this.setState({list: newlist, newtext:newtext})) //thừa 1 dòng ?
/*         }
        else
        {

        } */
      
    
      //setTimeout(this.setState({list: newlist, newtext:newtext}),10000) // render cùng lúc khởi chạy hàm
      //console.log(newtext) //not real due to asynschrnous mechanism
    
      
    
  }

    
     
     updateStatus(newtext){
    
     var statuskey = "COMPLETEPENDING"; var newstatus = statuskey.replace(this.state.status,"")
     this.setState({status:statuskey.replace(this.state.status,"")})

 /*     var API_URL = 'https://localhost:44341/api/DataGriddd/?tablename=StaffName999&STT=999'
     var formatindex = ('000' + (this.state.index+1)).slice(-3)
     console.log(formatindex)
     API_URL = API_URL.replaceAll('999',formatindex)
     console.log(API_URL) 
     */

     var API_URL = 'https://localhost:5001/api/MatchCode'
     //var API_URL = 'https://localhost:5001/api/DataGriddd?tablename=StaffName99'
     console.log(JSON.stringify(newtext))

     const reqOp = {method: 'PUT',
     headers: {'Content-Type': 'application/json' },
     body: JSON.stringify(newtext)
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

      var API_URL = `https://localhost:5001/api/DataGriddd/?tablename=StaffInfo&len=${300}&index=1`
       
      fetch(API_URL)
      .then(response => response.json())
      .then(data => this.setState({newtext:data}))

    }

    render(){
      var name = this.state.newtext.full
      var images = [...[name + " T.jpg"],...[name + " F.jpg"],...[name + " P.jpg"]];
      var list = {"list":`${this.state.list}`}
    return (
    <React.Fragment>
      <ReText writing = {list} field='list' height="3" updateWriting = {this.updateList} />
      {this.state.newtext.map((newtext,i) => 
      <div class = 'FramePart' >
      
      {/* <SlideBox images = {images}/> */}
      <ReText id = {i} writing= {newtext} field = 'FullN' updateWriting = {this.updateWriting} height="3" />
      <ReText id = {i} writing= {{'First':`A${i}`}} field = 'First' updateWriting = {this.updateWriting} height="3" />
      <ReText id = {i} writing= {newtext} field = 'Last' updateWriting = {this.updateWriting} height="3" />
      <ReText id = {i} writing= {newtext} field = 'ma' updateWriting = {this.updateWriting} height="3" />
      <ReText id = {i} writing= {newtext} field = 'ten' updateWriting = {this.updateWriting} height="3" />
      <button class= "CheckIcon" onClick= {() => this.updateStatus(newtext)}>{this.state.status}</button>
      <button onClick= {() => this.autoedit(i)}>SỬA</button>
      </div>
    )}
    </React.Fragment>
      )}
    }



   
    
    
 