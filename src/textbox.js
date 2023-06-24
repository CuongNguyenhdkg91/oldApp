import React,{Component} from 'react'

export class ReText extends Component{
    constructor(props){
    super(props);
    this.state = {editWriting: -1, writing:'UNDEFINED'}
    this.edit = this.edit.bind(this)
    this.update = this.update.bind(this)
    this.Typing = this.Typing.bind(this)
    this.NextText = this.NextText.bind(this)
    }
    edit(){
    this.setState({editWriting:this.state.editWriting*(-1)})
    }

    update(e){

        const writing = e.target.value

        this.setState({writing: writing});

        this.props.updateWriting(this.props.id,this.props.field,writing)
    }

    Typing(e){
        if (e.key=='Tab'){
            this.setState({editWriting:1})
        }
    } 

    NextText(e){
        if (e.key=='Tab'){
            //this.setState({editWriting:1})
            this.setState({editWriting:this.state.editWriting*(-1)})
        }
    }

    componentDidMount(){
        const writing=this.props.Writing
        if (writing > ''){this.setState({writing:writing})}
    }

    render(){
    const {field} = this.props
    const {writing,editWriting} = this.state
    var Writing; 
    if (editWriting==1)
    return <textarea rows = {this.props.height} cols = {this.props.width} onChange ={this.update} onDoubleClick = {this.edit} onKeyDown={this.Typing} onBlur = {this.NextText}>{writing}</textarea>
    
    else
    {
        Writing = <p onDoubleClick = {this.edit} > {writing} </p>
        if (writing=="")
        {Writing = <p onDoubleClick = {this.edit} > undefined </p>}
    }
    return Writing
    }
    }