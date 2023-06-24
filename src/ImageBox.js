import React,{Component} from 'react'

class ImageBox extends React.Component{
    constructor(props){
    super(props);
    this.state = {unhide: false, editLink: -1,imgpath:''}
    this.unhide = this.unhide.bind(this);
    this.edit = this.edit.bind(this);
    this.openImage = this.openImage.bind(this)
    this.updateThumbnail = this.updateThumbnail.bind(this)
    }

    updateThumbnail(m){
        const imgpath = m.target.value
        this.setState({imgpath: m.target.value})
        this.props.UpdateRow(this.props.id,this.props.field,imgpath)
        //console.log(imgpath)

/*         const ImgText = {"Part": `${this.props.Part}`, "Image":`${m.target.value}`,"Child":""}

        const reqOp = {method: 'PUT',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(ImgText)
        }
       
       var API_URL = 'https://localhost:5001/api/ImgText'
        
       fetch(API_URL,reqOp) */

        }

    unhide(){
    this.setState({unhide:!this.state.unhide});
    }

    edit(m){
    m.target.style.color = "blue"; // new element created immediately after than cannot witness the effect
    this.setState({editLink:this.state.editLink*(-1)});
    }

    openImage(){
        window.open(this.state.imgpath,'_blank')
    }

    componentDidMount(){
        const imgpath=this.props.imgpath
        //console.log(imgpath)
        if (imgpath > ' '){this.setState({imgpath:imgpath})}

/*         var API_URL = `https://localhost:5001/api/ImgText/?Part=${this.props.Part}`

        fetch(API_URL)
            .then(response => response.json())
            .then(data => {if (typeof(data[0]) !== 'undefined') {this.setState({newThumbnail:data[0].Image})}
        }) */
      }

    render(){

    // const {imgpath} = this.props
    const {imgpath} = this.state
    const {driveID} = this.props
    let localpath
    const drivepath = `https://drive.google.com/uc?export=view&id=${driveID}`

    var Image
    if (this.state.editLink==1)
    {Image = <textarea className="writtingBox" rows="2" cols= "25" onChange = {this.updateThumbnail} onDoubleClick = {this.edit}></textarea>} 
    else
    {
        let editBtn
        var src = "https://thanhtrung.vn/storage/uploads/20200701-lodddgo-cdddo-typse.png"
        if (this.state.unhide) {
        editBtn = <button className="edit" onClick={this.edit}>EDIT</button>
        }
        if (this.props.source == 0) {src = imgpath}
        if (this.props.source == 1 && driveID > ' ') {src = drivepath}
        
        Image = (
        <>
        {editBtn}
        <img className="instruction" src={src} onMouseEnter={this.unhide} onClick={this.openImage}></img>
        </>
        )
    }
    
    return (<>{Image}</> )
        
    }
    }

    ImageBox.defaultProps = {
        source: 0,
        driveID: '1kXDDppEZv0MRpXIplSC4PG2G-Nfq0Cj6'
        
        
    }
    
    export default ImageBox