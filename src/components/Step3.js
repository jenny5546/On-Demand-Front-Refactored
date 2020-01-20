import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'
import {useDropzone} from 'react-dropzone';


import "../scss/Step.scss"

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
    textalign: 'center',
  };
  
  const thumb = {
    display: 'flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    margin: 'auto',
    marginBottom: 8,
    //marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
  };
  
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%',
};
  
  
  function Previews(props) {
    const [files, setFiles] = useState([]);
    const {getRootProps, getInputProps} = useDropzone({
      accept: 'image/jpeg, image/png',
      onDrop: acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        })));
      }
    });
    
    const thumbs = files.map(file => (
      <div style={thumb} key={file.name}>
        <div style={thumbInner}>
          <img
            src={file.preview}
            style={img}
          />
        </div>
      </div>
    ));
  
    useEffect(() => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);
  
    return (
      <section className="container">
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop your own theme photo!</p>
          <p>(Only *.jpeg and *.png images will be accepted)</p>

        </div>
        <div className="image" style={thumbsContainer}>
          {thumbs}
        </div>
      </section>
    );
  }
  

class Step3 extends React.Component{
    constructor(props){
        super(props)

        this.state={
            theme_num : 0,
            pagenumber: 3,
        }
        this.change = this.change.bind(this)
        this.urlMaker = this.urlMaker.bind(this)

    }
    change(e){
        let temp = this.state.theme_num
        //console.log(e.target.className)
        //document.getElementsByClassName("one").style.backgroundColor = "lightblue"
      
        if(this.state.theme_num === 3){
            alert("max!!")
        }
        else{
            this.setState({
                theme_num : temp+1
            },()=>console.log(this.state))
            this.props.changeData2(e.target.alt, e.target.name)

        }
       
    }

    urlMaker(){
        if(this.state.usertype === "commercial"){
            return "./step1-1"
        }
        else if(this.state.usertype === "residential"){
            return "./step2"
        }
        else{
            //alert("write!!!")
            return "./step1"
        }
    }

    render() {
        return(
            <div className="step">
            <CSSTransitionGroup
            transitionName="worksTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={true}
            transitionLeave={true}>
                <div className="step__outer-box">

                    <div className="step__inner-box">
                        <div className="step__progressbar">
                            <h5> 3 / 4 Theme Choice</h5>

                        </div>
                        <div className="step__contents--column2">
                            <div className="description">
                                <p>Your theme : {this.props.dataContainer[7]}</p>
                            </div>
                            <div className="imgbox">
                                <div className="img">
                                    <button className="imgbutton 1" onClick={this.change}><img name="theme1" alt="modern" src="./interior_design/modern/1.png"/> </button>
                                    <button className="imgbutton 2" onClick={this.change}><img name="theme1" alt="modern" src="./interior_design/modern/6.png"/> </button>
                                    <button className="imgbutton 3" onClick={this.change}><img name="theme1" alt="modern" src="./interior_design/modern/2.png"/> </button>
                                </div>
                                <div className="img">
                                    <button className="imgbutton 4" onClick={this.change}><img name="theme1" alt="minimalist" src="./interior_design/minimalist/1.png"/> </button>
                                    <button className="imgbutton 5" onClick={this.change}><img name="theme1" alt="minimalist" src="./interior_design/minimalist/2.png"/> </button>
                                    <button className="imgbutton 6" onClick={this.change}><img name="theme1" alt="minimalist" src="./interior_design/minimalist/4.png"/> </button>
                                </div>
                                <div className="img">
                                    <button className="imgbutton 7" onClick={this.change}><img name="theme1" alt="industrial" src="./interior_design/industrial/1.png"/> </button>
                                    <button className="imgbutton 8" onClick={this.change}><img name="theme1" alt="industrial" src="./interior_design/industrial/2.png"/> </button>
                                    <button className="imgbutton 9" onClick={this.change}><img name="theme1" alt="industrial" src="./interior_design/industrial/3.png"/> </button>
                                </div>
                            </div>
                            <Previews />

                        </div>
                        <div className="step__button">
                            
                            <Link to="/step2"><button className="previous">
                                <h5>＜</h5>
                            </button></Link>
                            <Link to="/step4"><button className="next">
                                <h5>＞</h5>
                            </button></Link>
                        </div>
                        
                    </div>

                </div>
                </CSSTransitionGroup>
            </div>
        )
    }
}

export default Step3