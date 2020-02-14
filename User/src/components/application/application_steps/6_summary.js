import React, { Component } from 'react';
import axios from 'axios';

class Summary extends Component{

    saveAndContinue = (e) =>{ //얘는 마지막 단계니까 payment 로 이동하게 바꾸기
        e.preventDefault();
        this.handleSubmit();
        // demo에서는 여기서 처음으로 돌아가게 함.
        //this.props.nextStep();
        this.props.setStep();
    }
    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    handleSubmit() {

        let form_data = new FormData();
        
        form_data.set('floor_type', this.props.values.floorType);
        form_data.set('commercial_type', this.props.values.commercialType);
        
        const plan = this.props.values.floorPlan;
        for (var file of plan){
            form_data.append('floor_plan', file)
            console.log(file);
        }

        form_data.set('floor_number', this.props.values.floorNumber);
        form_data.set('floor_size', this.props.values.floorSize);
        form_data.set('floor_size_unit', this.props.values.floorSizeUnit);
        form_data.set('floor_height', this.props.values.floorHeight);
        form_data.set('floor_height_unit', this.props.values.floorHeightUnit);
        form_data.set('floor_address', this.props.values.floorAddress);

   
        if (this.props.values.floorTheme[0]){
            const theme = this.props.values.floorTheme;
            for (var img of theme){
                form_data.append('uploaded_theme', img)
                // console.log(img);
            }
        }
        if (this.props.values.floorSelectedTheme[0]){
            const theme = this.props.values.floorSelectedTheme;
            for (var opt of theme){
                form_data.append('selected_theme', opt)
                // console.log(opt);
            }
        }

        form_data.set('add_req', this.props.values.additionalRequest);

        axios.post(`http://127.0.0.1:8000/adminpage/request/`, form_data, {
                headers:{
                    'content-type': 'multipart/form-data',
                },
        }).then(res => {
            console.log(res.data) 
        }).catch(err=> console.log(err))

    };

    calculateCost=(type,size)=>{
        const unit = this.props.values.floorSizeUnit;
        const m = 'm';
        const ft= 'ft';

        if (type==='Residential'){

            if ( (size <= 300 && unit===m) || (size <= 3229 && unit===ft)  ) return(<p1>$99</p1>)
            if ((size > 300 && size<= 600 && unit===m) || (size > 3229 && size<= 6458 && unit===ft) ) return(<p1>$199</p1>)
            if ((size > 600 && size <= 900 && unit===m ) || (size > 6458 && size<= 9687 && unit===ft) ) return(<p1>$299</p1>)
            else return(<p1>$499</p1>)
        }
        else{
            
            if ( (size <= 300 && unit===m) || (size <= 3229 && unit===ft)  ) return(<p1>$199</p1>)
            if ((size > 300 && size<= 600 && unit===m) || (size > 3229 && size<= 6458 && unit===ft) ) return(<p1>$299</p1>)
            if ((size > 600 && size <= 900 && unit===m ) || (size > 6458 && size<= 9687 && unit===ft) ) return(<p1>$499</p1>)
            else return(<p1>$699</p1>)
        }
    }

    render(){
        return(
            <div className="sum-application">

                <div className="sum-application__title">
                    Order Summary
                </div>
                <div className="sum-application__subtitle">
                   Confirm your Application Details
                </div>

                <div className="sum-application__body">

                    <div className="summary">
                        {/* 불러오기 */}

                        {/* <div className="summary__left"> */}
                        <div className="summary__type">
                            <label className="summary__type-label">
                                Floor Type : &nbsp;
                            </label>
                            <div className="summary__type-value">
                                {this.props.values.floorType} 
                                {(this.props.values.floorType) === "Commercial" ? '( ' : ''} 
                                {(this.props.values.floorType) === "Commercial" ? (this.props.values.commercialType)  : ''} 
                                {(this.props.values.floorType) === "Commercial" ? ' )' : ''} 
                            </div>
                            
                        </div>

                        <hr className="summary__division"/>
    
                        <div className="summary__plan">

                            <div className="summary__plan-imgdiv">
                                    <img className="summary__plan-imgdiv-image" src= {this.props.values.floorPlanUrl} alt="floorplan-summary"></img>
                                {/* <label className="summary__contents-label">Uploaded Floor Plan</label> */}
                            </div>

                            <div className="summary__plan-info">
                                {/* <div className="summary__plan-info-title">
                                    Floor Plan Information
                                </div> */}
                                <div className="summary__plan-info-contents">
                                    <label className="summary__plan-info-contents--label">Number of Floors:&nbsp; </label>
                                    <div className="summary__plan-info-contents--value">{this.props.values.floorNumber}</div>
                                </div>
                                <div className="summary__plan-info-contents">
                                    <label className="summary__plan-info-contents--label">Size of Floor: &nbsp; </label>
                                    <div className="summary__plan-info-contents--value">{this.props.values.floorSize} {this.props.values.floorSizeUnit} &sup2;</div>
                                </div>
                                <div className="summary__plan-info-contents">
                                    <label className="summary__plan-info-contents--label">Height of Floor:&nbsp; </label>
                                    <div className="summary__plan-info-contents--value">
                                        {this.props.values.floorHeight} {this.props.values.floorHeightUnit}
                                    </div>
                                </div>
                                <div className="summary__plan-info-contents">
                                    <label className="summary__plan-info-contents--label">Address of Floor: &nbsp;</label>
                                    <div className="summary__plan-info-contents--value">
                                        {this.props.values.floorAddress}
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                        <hr className="summary__division"/>

                        <div className="summary__theme">
                            <label className="summary__theme-label">Floor Themes: &nbsp;   </label>
                            

                            {this.props.values.floorSelectedTheme.length !== 0? 
                            
                            
                            this.props.values.floorSelectedTheme.map(items =>{
                                return (
                                    <div><img src={items} className="summary__theme-images" alt="selected-style"></img></div>
                                )
                            }) :
                            (<img src={this.props.values.floorThemeUrl} style={{width: "50px", height: "50px"}} alt='uploaded-style'></img>)
                            
                            
//why
                        }
                        </div>
                        {/* </div> */}
                        
                        <hr className="summary__division"/>
                        {/* <div className="summary__right"> */}
                        <div className="summary__add">
                            <label className="summary__add-label">Additional Requests: &nbsp; </label>
                            <div className="summary__add-value">{this.props.values.additionalRequest} </div>
                        </div>

                        <hr className="summary__division"/>

                        <div className="summary__contact">
                            <label className="summary__contact-label">Contact Information: &nbsp; </label>
                            <div className="summary__contact-value">jenny5546@naver.com</div>
                        </div>

                        <hr className="summary__division"/>
                        
                        <div className="summary__cost">
                            <label className="summary__cost-label">Payment Amount &nbsp; </label>
                            <div className="summary__cost-value">
                                {this.calculateCost(this.props.values.floorType,this.props.values.floorSize)} 
                                ({this.props.values.floorType}, {this.props.values.floorSize} {this.props.values.floorSizeUnit} &sup2; )
                            </div>
                            
                        </div>
                        {/* </div> */}
                        
                    </div>

                    <div className="summary__confirm">
                        <button className="summary__confirm--btn" onClick={this.saveAndContinue}> Confirm Payment</button>
                    </div> 
                </div>
                
                

                <div className="sum-application__control">
                    <div className="sum-application__control-back">
                        <button className="sum-application__control-back--btn" onClick={this.back}> &lt; &nbsp; Edit Application   </button>
                    </div> 
                    
                </div>


            </div>
        )
    }
}

export default Summary ;