import React,{Component} from 'react'
import ImageBox from './ImageBox'
import {ReText} from './textbox.js'
import { EditForm } from './EditForm'

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

export class ReTimeline extends Component{        /*thêm chữ export default sẽ bị lỗi cannot export the class Retimeline*/
    constructor(props){
        super(props);
        this.state = {Data:[],ActPLoai:'Ploai'}
        this.UpdateRow=this.UpdateRow.bind(this)
        this.Add=this.Add.bind(this)
        this.Search = this.Search.bind(this)
        this.UpdateInfo = this.UpdateInfo.bind(this)
        this.ChonLoai = this.ChonLoai.bind(this)

    }

UpdateInfo(i){
        const Data = this.state.Data
        Data[i].PLoai = this.state.ActPLoai
        this.setState({Data:Data})
    
        this.UpdateRow(Data[i].ID,"PLoai",this.state.ActPLoai)
    }
    
ChonLoai(loai){
        this.setState({ActPLoai:loai})
    }
    
    
UpdateRow(id,field,value){
    
        console.log(field + value)
    
        const ImgText = {"ID": `${id}`, "fieldname": `${field}`,"fieldvalue": `${value}`}
        //console.log(ImgText + 'a')
        //ImgText[field]=value
    
        var API_URL = 'https://localhost:5001/api/UpdateField'
    
        const reqOp = {method: 'PUT',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(ImgText)
       }
    
        fetch(API_URL,reqOp)
       
     }
    
Add(){
        const Data = this.state.Data
        Data.push(1)
        this.setState({Data:Data})
    
    }
    
Search(){
          var Data=[]
          var API_URL = ''
    
        //API_URL = `https://localhost:5001/api/Datagriddd?key1=${APIvar.key1}&key2=${APIvar.key2}&key3=${APIvar.key3}`
        //console.log(keyword)
        //let keyword = '%'
           let encoded = encodeURIComponent('%'+this.props.keyword+'%')
    
           API_URL = `https://localhost:5001/api/ImgText?Search=${encoded}`
    
            async function pushtext(){
           
            const promise = await fetch(API_URL)
    
            const data = await promise.json()
              if (typeof(data) !== 'undefined')
              {
              Data=data
              }
              
            }
            pushtext().then(a => this.setState({Data:Data})) //khong chay neu thieu a =>
    
    }

    
render(){

const Qty=1
const DerivePart = 'checking'
const {Data} = this.state


return(
<>
<EditForm Qty={Qty} part={DerivePart} Update={this.Update} Add={this.Add} Search = {this.Search} ChonLoai = {this.ChonLoai} />

{Data.map((Data,i)=>
<>
<div id = 'instruction'>
    <label className="symbol"></label>
    <strong className = "title">{Data.Part} </strong>
    <span className= "subjectINinstruction" onClick={()=> this.UpdateInfo(i)}> {Data.PLoai} </span>
    <div className='ghost'>
        <ImageBox field = 'Image' id =  {Data.ID} imgpath = {Data.Image} UpdateRow={this.UpdateRow} />
        <ReText  field = 'Writing' id = {Data.ID} Writing = {Data.Writing} updateWriting={this.UpdateRow}/>
    </div>
</div>
</>
)}
</>
)}

}




