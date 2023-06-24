class FabricationStep extends React.Component {
    constructor(props){
    super (props);
    this.state = {Qty:5, DerivePart: 'Luc giac M6x30', active: 'Nothing', Tape: []}
    this.Update = this.Update.bind(this)
    this.Active = this.Active.bind(this)
    this.InputClipboard = this.InputClipboard.bind(this)
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
  document.querySelector("#clipboard").select()
  document.execCommand("copy")
   }
  
   InputClipboard(e){
      console.log('GO')
      e.target.select()
      document.execCommand("copy")
   }
  
   componentWillMount(){
       this.setState({Tape:this.props.storage001})
   }
  
    render() {
      // console.log(this.state.Tape)
      const {Qty, DerivePart, active, Tape} = this.state
  
  
      return (
      <>
      <EditForm Qty={Qty} part={DerivePart} Update={this.Update} />
      <table>
      <thead>
          <tr>
          <td>Hình ảnh</td>
          <td>Chi tiết</td>
          <td>Hệ số</td>
          <td style = {{width: '190px'}}>Vị trí lắp</td>
          <td> Mã vật tư</td>
          <td >Qty</td>
          </tr>
      </thead>
          {this.props.fabricationStep.map((group,i) => 
  
          <>
          <VarElement i={i} group={group}/> 
          {group.step.split('; ').map((astep,i)=>
          <tr>
          <EditableRow astep = {astep} Active = {this.Active} code = {'A'+group.code + '-'+(i+1)} Tape = {Tape} Copy = {this.Update}/>
          </tr>
          )}
          </>
      )}
      </table>
      <Aggregate Tape = {Tape} />
      <textarea id = 'clipboard' value={JSON.stringify(Tape)} onChange={this.InputClipboard} />
      <p>{JSON.stringify(Tape)}</p>
      </>
      );
    }
  }
  
  class VarElement extends React.Component {
    constructor(props){
    super (props);}
    
    render() {
      var n = this.props.group.step.split('; ').length+1;
      var img = ('00' + (this.props.i+1)).slice(-3) + '.jpg';
      return (
          <tr>
              <td rowSpan = {n}> <img src = {img} height = {29*(5-1)+'px'} class='thumbnail'></img> </td>
              <td rowSpan = {n}> {this.props.group.part} </td>
              <td rowSpan = {n}> {this.props.group.itemQty} </td>
              
          </tr>
      )}}
  
      
  class EditForm extends React.Component {
    constructor(props){
    super (props);
    
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
                      
                      <select>
                          <option> Bulong thép M8x30  </option>
                          <option> Bulong thép M6x50  </option>
                          <option> Bulong inox M12x20 </option>
                      </select>
                  </div>
      
                  <div>
                  <button>Update</button>
                  <button>Cancel</button>
                  </div>
                  
              </fieldset>
              </form>
              </div>
          </div>
      )}}
  
  
  class EditableRow extends React.Component {
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
              // console.log(code) //not make console.log this scheme of function declare
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
  
  class Aggregate extends React.Component {
    constructor(props){
    super (props);}
    
    render() {
      const {Tape} = this.props
      var Aggr = []
  
      Tape.forEach(row => {
          var i = Aggr.findIndex(aux => aux.part === row.part);
          if (i === (-1)) {
              Aggr = [...Aggr, ...[{'part': row.part, 'Qty': parseFloat(row.Qty)}]]
          }
          else{
              Aggr[i].Qty += parseFloat(row.Qty)
          }
  
          if (!(row.part.search("Bulong") === -1)) {
          var deriveLev2
          deriveLev2 = row.part.split('x')[0].replace('Bulong','Đai ốc')
          i = Aggr.findIndex(aux => aux.part === deriveLev2);
          if (i === (-1)) {
              Aggr = [...Aggr, ...[{'part': deriveLev2, 'Qty': parseFloat(row.Qty)}]]
          }
          else{
              Aggr[i].Qty += parseFloat(row.Qty)
          }
          }
  
          if (!(row.part.search("Bulong") === -1)) {
          var deriveLev2
          // deriveLev2 = row.part.split('x')[0].replace('Bulong','Long đền').replace('răng nhuyễn ',"")
          deriveLev2 =  'Long đền ' + row.part.split('M')[1].split('x')[0]
          i = Aggr.findIndex(aux => aux.part === deriveLev2);
          if (i === (-1)) {
              Aggr = [...Aggr, ...[{'part': deriveLev2, 'Qty': parseFloat(row.Qty)*2}]]
          }
          else{
              Aggr[i].Qty += parseFloat(row.Qty)*2
          }
          }
      })
  
  Aggr = Aggr.sort(function(a, b) {
    if (a.part > b.part) {
      return 1;
    }
    if (a.part < b.part) {
      return -1;
    }
    return 0;
  })
  
      return (
      <table>
          <tr>
              <td> Derivative Part </td>
              <td> Qty </td>
          </tr>
          {Aggr.map(row => 
              <tr>
                  <td> {row.part} </td>
                  <td> {row.Qty} </td>
              </tr>
          )}
      </table>
      )}}