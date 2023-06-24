import React from 'react'

export class EditForm extends React.Component {
    constructor(props){
    super (props);
    this.Chon=this.Chon.bind(this)
    this.state = {Chon:''}
    
  }

  Chon(e){
    const chon = e.target.value
    this.props.ChonLoai(chon)
    console.log(chon)
  }
    
    render() {
  
      return (
          <div class = "inputArea">
              <div style ={{fontSize: '25px'}}> Edit What?? </div>
              <div><form><fieldset>
                  
                  <div style ={{width: '270px'}} class='hs'>
                      <label for = 'Partnumber'> Partnumber </label>
                      <input name='F' value={this.props.part} onChange={this.props.Update}  id = 'Partnumber'></input>
                  </div>
                  <div style ={{width: '40px', backgroundColor: 'inherit'}} class='hs'>
                      <label> Qty </label>
                      <input name = 'x' value = {this.props.Qty} onChange={this.props.Update} ></input>
                  </div>
              </fieldset>
              
              <fieldset>	
                  <div>
                      <div>{this.props.part}</div>
                      
                      <select onChange={this.Chon}>
                          <option> Tồn Kho - Sản Xuất  </option>
                          <option> Quy cách kỹ thuật  </option>
                          <option> Vật tư Dụng cụ </option>
                      </select>
                  </div>
      
                  <div>
                  <button type="button" onClick = {this.props.Add}>Update</button> {/* refresh khi click*/}
                  <button>Cancel</button>
                  </div>
              </fieldset>
              </form>
              <button onClick = {this.props.Add}>ADD</button>
              <button onClick = {this.props.Search}>SEARCH</button>
              </div>
          </div>
      )}}