import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: "Srinivasa",
    lastName: "Durai",
    email: "kai122373@gmail.com",
    dob: "30/10/2000",
    mobileNumber: 6381234567,
    altMobileNumber: 1234567890,
    address: "No: 12, 4th Street, Saint Colony, Guindy, Chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    postalCode: "600323",
    education: [{
        collegeName: "1 College",
        degree: "B.Sc",
        specification: "Statistics",
        fromYear: "12/08/2018",
        toYear: "01/05/2021",
        Pursuing: false,
    }, {
        collegeName: "2 College",
        degree: "B.Sc",
        specification: "Statistics",
        fromYear: "12/08/2018",
        toYear: "01/05/2021",
        Pursuing: false,
    }, {
        collegeName: "3 College",
        degree: "B.Sc",
        specification: "Statistics",
        fromYear: "12/08/2018",
        toYear: "01/05/2021",
        Pursuing: false,
    }, {
        collegeName: "4 College",
        degree: "B.Sc",
        specification: "Statistics",
        fromYear: "12/08/2018",
        toYear: "01/05/2021",
        Pursuing: false,
    }],
    experience: [{
        companyName: "Spark 1",
        role: "SDE I",
        type: "internship",
        fromYear: "12/08/2018",
        toYear: "01/05/2021",
        Pursuing: false,
    }, {
        companyName: "Spark 2",
        role: "SDE I",
        type: "internship",
        fromYear: "12/08/2018",
        toYear: "01/05/2021",
        Pursuing: false,
    }, {
        companyName: "Spark 3",
        role: "SDE I",
        type: "internship",
        fromYear: "12/08/2018",
        toYear: "01/05/2021",
        Pursuing: false,
    }, {
        companyName: "Spark 4",
        role: "SDE I",
        type: "internship",
        fromYear: "12/08/2018",
        toYear: "01/05/2021",
        Pursuing: false,
    }],
    linkdIn: "asd",
    personalWebsite: "qwe",
    gitProfile: "zxc",
    portfolio: "123",
    other: "none",
}

const resumeSlice = createSlice({
    name: "resume",
    initialState,
    reducers: {
        personalInfo: (state, action) => {
            switch (action.type) {
                case "input":
                    return { ...state, ...action.payload }
                case "display":
                    return { ...state }
                default:
                    return <></>
            }
        },
        educationInfo: (state, action) => {
            switch (action.type) {
                case "input":
                    return { ...state, ...action.payload }
                case "display":
                    return { ...state }
                default:
                    return <></>
            }
        },
        workInfo: (state, action) => {
            switch (action.type) {
                case "input":
                    return { ...state, ...action.payload }
                case "display":
                    return { ...state }
                default:
                    return <></>
            }
        },
    }
})

export default resumeSlice.reducer;
export const { personalInfo, educationInfo, workInfo } = resumeSlice.actions