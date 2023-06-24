import React,{Component} from 'react'
import {ReText} from './textbox.js'
import ImageBox from './ImageBox'


export class ReSearch extends React.Component {
    constructor(props){
    super (props);
    this.state = {brand:'KUBOTA', search:'Undefined', item:this.props.item, index:0}
    this.update = this.update.bind(this)
    this.ToggleBrand = this.ToggleBrand.bind(this)
    this.ChangeAlternative = this.ChangeAlternative.bind(this)
  }

  update(id,field, writing){
    var search = writing
    var keyset = writing.split(';') 
    let item

    const APIvar = {"key1": `${keyset[0]}`, "key2":`${keyset[1]}`,"key3":`${keyset[2]}`}
    //APIvar.key1 = "TBT"
    //APIvar.key2 = "D"
    var API_URL = `https://localhost:5001/api/Datagriddd?key1=${APIvar.key1}&key2=${APIvar.key2}`

        async function pushtext(){
       
        const promise = await fetch(API_URL)

        const data = await promise.json()
          if (typeof(data[0]) !== 'undefined')
          {
          item=data
          }
        }

        //console.log(keyset)
        pushtext().then(a => {
          if (keyset[1] > '' && item !== undefined) {this.setState({item: item })}
          console.log(item)
        }) //khong chay neu thieu a =>

        //console.log(item !== undefined) //not put '' will be true
        
      

  }

  ToggleBrand(){
    
  }

  ChangeAlternative(e){
    let step
    if (e.ctrlKey) {step = -1} else {step = 1}
    var i = this.state.index
    if (i+step > (this.state.item.length - 1)) {i=0} else {i = i + step}
    this.setState({index: i })
  }

  componentDidMount(){

  }
  
    render() {
      const {brand, search,item, index} = this.state

      return (
      <>
      <table>
      <thead>
          <tr>
          <td style = {{width: '190px'}}>Hình ảnh</td>
          <td style = {{width: '300px'}}>Sản phẩm</td>
          <td style = {{width: '190px'}}>Search</td>
          <td style = {{width: '30px'}}>Alternative</td>
          </tr>
      </thead>
          <>
          <tr>
              <td><ImageBox source = {1} driveID = {item[index].DrivePath}/></td>
              <td>
                  <p>{item[index].MaUser + ' - ' + item[index].TenHang}</p>
                  <p>{item[index].nxgn} </p>
                  <p>{item[index].DrivePath}</p>
              </td>
              <td><ReText id = {1} writing= {search} field = 'Search' updateWriting = {this.update} height="3" /></td>
              <td>
                  <button class = 'editBtn' onClick = {this.ChangeAlternative} > SHIFT </button>
                  <br></br>
                  <p>{`${index+1}/${item.length}`}</p>
              </td>
          </tr>

          </>
      
      </table>


      </>
      );
    }
  }