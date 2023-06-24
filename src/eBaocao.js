import React,{Component} from 'react'
import dayjs from "dayjs";
import Combobox from "react-widgets/Combobox";
import "react-widgets/styles.css";

export class ReBaocao extends React.Component {
    constructor(props){
    super (props)
    this.state = {list:[]}
  }

  componentDidMount(){
    var getdata=[]
    var API_URL = `https://localhost:5001/api/TaskandTool/DateSet?ma_nv=${this.props.ma_nv}`
    async function pushtext(){
        const promise = await fetch(API_URL)
        const data = await promise.json()
        if (typeof(data[0]) !== 'undefined') {
            getdata=data
        }
    }
        pushtext().then(a => {this.setState({list: getdata})})

  }
  
  render() {

    return (
        <>
        <Combobox
        defaultValue="Yellow"
        data={["Red", "Yellow", "Blue", "Orange"]}
        />

        {this.state.list.map((row,i) =>
        <>
        <p>{'Ngày ' + dayjs(row.ngay_cc).format('DD/MM')}</p>
        <SpanBOM ngay = {row.ngay_cc} ma_nv = {this.props.ma_nv}/>
        </>
    )}
    </>

  )}
}

export class SpanBOM extends React.Component {
    constructor(props){
    super (props)
    this.state = {list:[],list2:[]}
  }

componentDidMount(){
    var getdata=[]
    var groupdata = []
    var API_URL = ''
    API_URL = `https://localhost:5001/api/TaskandTool/task?Ngay=${this.props.ngay}&ma_nv=${this.props.ma_nv}`

    async function pushtext(){
        const promise = await fetch(API_URL)
        const data = await promise.json()
        if (typeof(data[0]) !== 'undefined') {
            getdata=data

            getdata.map((row,i) =>
            {
            var j = groupdata.findIndex(aux => aux.ten_cv == row.ten_cv);
            if (j >= 0) {groupdata[j].vat_tu.push({"ten_vt": `${row.ten_vt}`,"SL1SP":`${row.SL1SP}`})
            }
            else{
                var punch = {"ten_cv": `${row.ten_cv}`,"so_luong":`${row.so_luong}`, "vat_tu": [{"ten_vt": `${row.ten_vt}`,"SL1SP":`${row.SL1SP}`}]}
                groupdata.push(punch)
                }
            })
            }
            //console.log(groupdata)
            //console.log(getdata)
        }

    pushtext().then(a => 
        {
this.setState({list: groupdata})})

var getdata2 =[]

API_URL = `https://localhost:5001/api/TaskandTool/XuatVatTu?Ngay=${this.props.ngay}&ma_nv=${this.props.ma_nv}`

async function pushtext2(){
    const promise = await fetch(API_URL)
    const data = await promise.json()
    if (typeof(data[0]) !== 'undefined') {
        getdata2=data
    }
}
 //khong chay neu thieu a =>
    pushtext2().then(a => {this.setState({list2: getdata2})})
    console.log(getdata2)

}

render() {

    return (
        <>

    <table>

      <thead>
          <tr>
          <td style = {{width: '28%'}}>Vật tư đã xuất</td>
          <td style = {{width: '35%'}}>Công việc</td>
          <td style = {{width: '28%'}}>Vật tư cần dùng</td>
          <td style = {{width: '9%'}}>SL cần</td>
          </tr>
      </thead>
      <tr>
      <td rowspan = '20'>
               {this.state.list2.map((row,i) =>
             <div>{row.ten_vt + ' - ' + row.so_luong}</div>
        )}
        
        </td>
      </tr>
        {this.state.list.map((row,i) =>
        <>
        <tr>
        <td rowspan = {row.vat_tu.length +1}>{row.ten_cv+ ' - ' + row.so_luong}</td>
        </tr>
       
        {row.vat_tu.map((vat_tu,i) =>
            <tr>
            <td >{vat_tu.ten_vt + ' * ' + vat_tu.SL1SP }</td> 
            <td >{vat_tu.SL1SP*row.so_luong}</td> 
            {/* row.so_luong*row.SL1SP */}
            </tr>
        )}

        </>
        
      )}


      
    </table>
    </>
    )
    }
}
