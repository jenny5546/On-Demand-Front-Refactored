import React, {useCallback} from 'react'
import { Link } from 'react-router-dom';
import "../scss/Step0.scss"
import {useDropzone} from 'react-dropzone';

/*
functions
================
drag & drop
format 판별하기
data input 저장하기
*/

function Accept(props) {
    const {acceptedFiles, rejectedFiles, getRootProps, getInputProps} = useDropzone({
      accept: 'image/jpeg, image/png'
    });
    
    const acceptedFilesItems = acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));
  
    const rejectedFilesItems = rejectedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));
  
    return (
      <section className="container">
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
          <em>(Only *.jpeg and *.png images will be accepted)</em>
        </div>
        <aside>
          <p>Accepted files</p>
          <ul>
            {acceptedFilesItems}
          </ul>
          <p>Rejected files</p>
          <ul>
            {rejectedFilesItems}
          </ul>
        </aside>
      </section>
    );
  }
  

class Step0 extends React.Component{
    constructor(props){
        super(props)

        this.setState({
            pagenumber: 2,
            input: "",
        })

        this.change = this.change.bind(this)

    }

    change(e){
      this.props.changeData2(e.target.value, e.target.name)
    }

    render() {
        const {list} = this.props
        return(
            <div className="Step2">
                <div className="outer_box">
                    <div className="inner_box">
                        <div className="progressbar">
                            <h4> Progress Bar</h4>
                        </div>
                        <div className="contents">

                            <div className="filebox">
                                <img src="data:image/png;base64,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"/>
                                <Accept />
                            </div>
                            <div className="text">
                                <form className="input">Number of Floor: <input type="text" name="num_floor" onChange={this.change}/></form>
                                <form className="input">Size of Floor: <input type="text" name="size_floor" onChange={this.change}/></form>
                                <form className="input">Height of Floor: <input type="text" name="height_floor" onChange={this.change}/></form>
                                <form className="input">Address: <br/><input type="text" name="address" onChange={this.change}/></form>
                            </div>
                        </div>
                        <div className="button">
                            <button className="button previous"><Link to="/step1">
                                Previous
                            </Link></button>
                            <button className="button next"><Link to="/step3">
                                Next
                            </Link></button>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Step0