import React,{Component} from 'react'

export class SlideImage extends React.Component{
        constructor(props){
        super (props);
        this.state = {index:0};
        this.nextslide = this.nextslide.bind(this)
        }
        nextslide(){
        if (this.state.index==(this.props.images.length-1)){this.setState({index:0})} else this.setState({index:this.state.index+1})
       }
        render(){
        return (
        <img src= {this.props.images[this.state.index]} onDoubleClick = {this.nextslide} height = {29*(5-1)+'px'} className= "thumbnail" alt= "NOT AVAILABLE"/>
        )}
        } 