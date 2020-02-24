import React, { Component, createContext } from "react";
import axios from "axios";
// import { Context } from "@emotion/stylis";

const OndemandContext = createContext();

const { Provider, Consumer: OndemandConsumer } = OndemandContext;



/* *-------------------------------------------------------------------* 
            Context 전체 관리 (modal open-close 및 폼 입력 값들 )
            + 폼 받아서 마지막에 Admin 으로 넘기는 과정까지 
*-------------------------------------------------------------------* */

class OndemandProvider extends Component {

    state = {

        openModal: false,
        
        floorType: "",
        commercialType: "", 
        floorPlan: [], 
        floorPlanUrl: [],
        floorSize: 0, 
        floorSizeUnit: "m",
        floorHeight: 0,
        floorHeightUnit: "m",
        floorAddress: "",
        floorSelectedTheme: [],
        floorUploadedTheme: [], 
        floorUploadedThemeUrl: [],
        additionalRequest: "", 
        contactInfo: "" 

    };

    handleOpenModal = () => {
        this.setState({
            openModal: !this.state.openModal
        });
    };

    /* Residential vs Commercial 고를 때 value 처리 */
    handleFloorType = event => {
        this.setState({ floorType: event });
    };

    /* Commercial Type 고를 때 value 처리 */
    handleFloorDetailType = event => {
        this.setState({ commercialType: event });
    };

    /* 직접 입력해서 넣는 값들 value 처리  */
    handleChange = input => event => {
        this.setState({ [input]: event.target.value });
    };

    /* Floor plan upload 할 때 처리  */
    handlePlanFile = e => {
        if (e.target.files[0]) {
            this.setState({ floorPlan: [...this.state.floorPlan, ...e.target.files] }) //admin으로 보내는 애
            
            const urls = [] 
            const files = Object.values(e.target.files)

            files.map(
                f => urls.push(URL.createObjectURL(f))
            )
            this.setState({ floorPlanUrl: urls }) //summary에서 보여주는 애
        }
    };

    /* Theme 직접 upload 할 때 처리  */
    handleUploadedTheme = e => {
        if (e.target.files[0]) {
            this.setState({ floorUploadedTheme: [...this.state.floorUploadedTheme, ...e.target.files] }) //admin으로 보내는 애 
           
            const urls = [];
            const files = Object.values(e.target.files);

            files.map(
                f => urls.push(URL.createObjectURL(f))
            )

            this.setState({ floorUploadedThemeUrl: urls }) //summary에서 보여주는 애
        }
    };

    /* Theme 선택할 때 처리  */
    handleSelectedTheme = value => {
        this.setState({ floorSelectedTheme: value });
    };

    /* *-------------------------------------------------------------------* 
                    | Back 에 POST 날리는 부분 |
    *-------------------------------------------------------------------* */

    handleSubmit= () => {

        let form_data = new FormData();
        console.log(this.state.floorSizeUnit)
        form_data.set("floor_type", this.state.floorType);
        form_data.set("commercial_type", this.state.commercialType);
        
        const plan = this.state.floorPlan;
        for (var file of plan) {
            form_data.append("floor_plan", file);
            console.log(file);
        }

        form_data.set("floor_size", this.state.floorSize);
        form_data.set("floor_size_unit", this.state.floorSizeUnit);
        form_data.set("floor_height", this.state.floorHeight);
        form_data.set("floor_height_unit", this.state.floorHeightUnit);
        form_data.set("floor_address", this.state.floorAddress);

        if (this.state.floorUploadedTheme[0]) {
            const theme = this.state.floorUploadedTheme;
            for (var img of theme) {
                form_data.append("uploaded_theme", img);
                // console.log(img);
            }
        }
        if (this.state.floorSelectedTheme[0]) {
            const theme = this.state.floorSelectedTheme;
            for (var opt of theme) {
                form_data.append("selected_theme", opt);
                // console.log(opt);
            }
        }

        form_data.set("add_req", this.state.additionalRequest);
        console.log(form_data)
        axios
            .post(`http://localhost:8000/adminpage/request/`, form_data, {
                headers: {
                    "content-type": "multipart/form-data"
                }
            })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }


    render() {

        const {
            floorType,
            commercialType,
            floorPlan,
            floorPlanUrl,
            floorSize, 
            floorSizeUnit,
            floorHeight,
            floorHeightUnit,
            floorAddress,
            floorSelectedTheme,
            floorUploadedTheme,
            floorUploadedThemeUrl,
            additionalRequest,
            contactInfo,
        } = this.state;

        const val = {
            floorType,
            commercialType,
            floorPlan,
            floorPlanUrl,
            floorSize, 
            floorSizeUnit,
            floorHeight,
            floorHeightUnit,
            floorAddress,
            floorSelectedTheme,
            floorUploadedTheme,
            floorUploadedThemeUrl,
            additionalRequest,
            contactInfo,
        };
        
        return (
            <Provider
                value={{
                    openModal: this.state.openModal,
                    handleOpenModal: this.handleOpenModal,
                    handleFloorType: this.handleFloorType,
                    handleFloorDetailType: this.handleFloorDetailType,
                    handleChange: this.handleChange,
                    handlePlanFile: this.handlePlanFile,
                    handleUploadedTheme: this.handleUploadedTheme,
                    handleSelectedTheme: this.handleSelectedTheme,
                    handleSubmit: this.handleSubmit,
                    val: val,
                }}
            >
                {this.props.children} 

            </Provider>
        );
    }
}

// 내보내줍니다.
export { OndemandProvider, OndemandConsumer, OndemandContext };
