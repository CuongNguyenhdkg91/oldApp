import React from 'react'
import { SlideImage } from './slideImage'
import ImageBox from './ImageBox'
import {ReText} from './textbox.js'

export class MergeRow extends React.Component {
    constructor(props){
    super (props)
/*     this.state = {newThumbnail:'https://i.ytimg.com/vi/yAIcWRhWS9c/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCZRIGQHz2RMyv1oc2cvSBUTriuRg'} 
    this.updateThumbnail = this.updateThumbnail.bind(this) */
    }
    
/*     updateThumbnail(m){
        this.setState({newThumbnail: m.target.value})
        
        }
 */
    render() {
      //var n = this.props.group.step.split('; ').length+1;
      //const n = 3
      const {n,item,search,altindex} = this.props

      var partid = "1R-ysVKkK1yMahgo1rqR3J54hvw7obF37"

      partid = "1KAq1zDH8ZoB2H_ONnimmt45wGA4Qbb78"

      var part = `https://drive.google.com/uc?export=view&id=${partid}`
      
      const itemQty = 10
      const BSP = 'BSP'
      //var img = ('00' + (this.props.i+1)).slice(-3) + '.jpg';
      return (
          <tr>
              {/* <td rowSpan = {n}> <img src = {img} height = {29*(5-1)+'px'} class='thumbnail'></img> </td> */}
              <td rowSpan = {n}> 
                <div class = 'ghost'>
                {/* <ImageBox thumbnail = {this.state.newThumbnail} updateThumbnail={this.updateThumbnail} /> */}
                <ImageBox imgpath = {part}/>
                </div>
              </td>
              {/* <td rowSpan = {n}> <ImageBox thumbnail = {this.props.newThumbnail} updateThumbnail={this.props.updateThumbnail} /></td> */}
              <td rowSpan = {n}> {item} </td>
              <td rowSpan = {n}> {item} </td>
              <td rowSpan = {n}> 
                    <ReText id = {1} writing= {search} field = 'Search' updateWriting = {this.updateWriting} height="3" />
                </td>
              <td rowSpan = {n}>
                    <button class = 'editBtn'> SHIFT </button>
                    <br></br>
                    <p>3/4</p>
              </td>
              
          </tr>
      )}}