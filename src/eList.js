import React,{Component} from 'react'
import {MergeRow} from './MergeRow.js'
import {EditableRow} from './EditableRow.js'
import {EditForm } from './EditForm.js'
import {ReText} from './textbox.js'


export class ReList extends React.Component {
    constructor(props){
    super (props);
    this.state = {Qty:5, DerivePart: 'Luc giac M6x30', active: 'Nothing', Tape: [],newThumbnail:'', ParseText:'copy from zalo'}
    this.Update = this.Update.bind(this)
    this.Active = this.Active.bind(this)
    this.updateThumbnail = this.updateThumbnail.bind(this)
    this.UpdateZaloText = this.UpdateZaloText.bind(this)
    //this.InputClipboard = this.InputClipboard.bind(this)
  }
  
  UpdateZaloText(id,field,value){
    this.setState({ParseText: value})
 }
  
    Update(e){
      // console.log(e.target.style)
      // console.log(e.target.className)
  
      if (e.target.name === 'x') {
          this.setState({Qty: e.target.value}) }
      if (e.target.name === 'F' ) {
          this.setState({DerivePart: e.target.value}) }
      if (e.target.className === 'part' ) {
          this.setState({DerivePart: e.target.innerHTML}) }
    }
  
    Active(e){
      const {active, Qty, DerivePart} = this.state
      var code = e.target.id
      var punch = [{'code': code, 'part': DerivePart, 'Qty': Qty}]
      this.setState(function(past) {
          var Tape = past.Tape
          var newTape
          var i = Tape.findIndex(aux => aux.code === code);
          if (i === -1) {
          newTape =  [...Tape,...punch]
          
          }
          else{
          Tape[i].part = punch[0].part
          Tape[i].Qty= punch[0].Qty
          // Tape[i]['go'] = 'new'
          newTape = Tape
          }
          return {Tape: newTape}
      })

   }

   updateThumbnail(m){
    this.setState({newThumbnail: m.target.value})
    
    }
  
/*    InputClipboard(e){
      console.log('GO')
      e.target.select()
      document.execCommand("copy")
   } */
  
   componentWillMount(){
       this.setState({Tape:this.props.storage001})
   }
  
    render() {
      // console.log(this.state.Tape)
      const {Qty, DerivePart, active, Tape} = this.state

      //const regex = new RegExp('ắt.*dc\d','igm')
      const regex = /Cắt [^\d]*dc\d[\d\/]*|Xả [^\d]*dc\d[\d\/]*/igm
      console.log(this.state.ParseText)
      //var TachBSP =['bass đầu td dc60', 'bass giửa tđ dc60', 'lưới gằng sóng dc70', 'máng bui dc70', 'máng lúa dc70', 'cánh quạt gió dc105']
        //TachBSP = regex.exec(this.props.ParseText)
        const TachBSP = [...this.state.ParseText.matchAll(regex)]
        console.log(TachBSP)

      const group = '1;1;dc93'
    
  
      return (
      <>
      {/* <EditForm Qty={Qty} part={DerivePart} Update={this.Update} /> */}
      <ReText field='ZaloText' id = 'gen' height = {10} width = {100} writing = {this.state.ParseText} updateWriting = {this.UpdateZaloText} />
      <table>
      <thead>
          <tr>
          <td style = {{width: '190px'}}>Hình ảnh</td>
          <td style = {{width: '190px'}}>Chi tiết</td>
          <td style = {{width: '190px'}}>Search</td>
          <td style = {{width: '190px'}}>Alternative</td>
          <td style = {{width: '50px'}}> </td>
          <td >Qty</td>
          </tr>
      </thead>
          {TachBSP.map((item,i) => 
  
          <>
          <MergeRow i={i} item={item} n={group.split(';').length +1 } model={group.split(';').pop()}/> 
          {/* <MergeRow i={i} group={group} newThumbnail={this.state.newThumbnail} updateThumbnail={this.updateThumbnail}/>  */}
          {group.split(';').map((astep,i)=>
          <tr>
          <EditableRow astep = {astep} Active = {this.Active} code = {'A'+group.code + '-'+(i+1)} Tape = {Tape} Copy = {this.Update}/>
          </tr>
          )}
          </>
      )}
      </table>

{/*       <Aggregate Tape = {Tape} />
      <textarea id = 'clipboard' value={JSON.stringify(Tape)} onChange={this.InputClipboard} />
      <p>{JSON.stringify(Tape)}</p> */}

      </>
      );
    }
  }