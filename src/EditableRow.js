import React from 'react'
import dayjs from "dayjs";

export class EditableRow extends React.Component {
    constructor(props){
    super (props);
    
  }
    
    render() {
      const {astep, Active, code, Tape, Copy} = this.props
      
      const punch = () => { 
          var i = Tape.findIndex(aux => aux.code === code);
          if (i === (-1)) {
              return ({'code': code, 'part': 'Update Derived Part', 'Qty': 0})
          }
          else {
          return Tape[i]
          }
        } 
      
      const comp = () => { if(code === code) {
          return(
          <>
              <td>{astep}</td>
              <td width = '190px' class = 'part' onClick = {Copy}>{punch().part}</td>
              <td height='30px' width = '30px' >{punch().Qty}</td>
              <td> <button class = 'editBtn' onClick = {Active} id={punch().code}> EDIT </button></td>
          </>)
          }
          else  {}
      }
      
      return (
          <>{comp()}</>
  )}}