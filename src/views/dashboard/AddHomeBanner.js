import React from "react";
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CFormSelect, CFormInput,CButton } from "@coreui/react";
import { useState } from "react";
// import { func } from "prop-types";
// import { Result } from "postcss";



function AddHomeBanner() {

    const[Type, setType]= useState("");
    const[Title, setTitle]= useState("");
    const[TagLine, setTagLine]= useState("");
    const[ButtonText, setButtonText]= useState("");
    const[UploadBanner, setUploadBanner]= useState("");
    const[MobileBanner, setMobileBanner]= useState("");
    const[UrlLink, setUrlLink]= useState("");
    

    function saveData(){
        console.warn({Type,Title,TagLine,ButtonText,UploadBanner,MobileBanner,UrlLink});
        let data={Type,Title,TagLine,ButtonText,UploadBanner,MobileBanner,UrlLink};
        fetch("http://localhost:4000/api/createbanners",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((Result)=>{
             console.warn("Result",Result)
            // Result.json().then((resp)=>{
            //     console.warn("resp",resp);
            // })
        })
    }
    

    return (
        <>
            <h5>Add Home Banner</h5>


            <CTable>
                <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell scope="col"></CTableHeaderCell>
                        <CTableHeaderCell scope="col"></CTableHeaderCell>
                        <CTableHeaderCell scope="col"><span>Fields with *are mandatory</span></CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    
                    <CTableRow>
                        <CTableHeaderCell scope="row"></CTableHeaderCell>
                        <CTableDataCell>Type</CTableDataCell>
                        <CTableDataCell>
                            <CFormSelect aria-label="Default select example" onChange={(e)=>{setType(e.target.value)}}>
                                <option>Select Type</option>
                                <option  value="Desktop">Desktop</option>
                                <option  value="Mobile">Mobile</option>
                            </CFormSelect>
                        </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row"></CTableHeaderCell>
                        <CTableDataCell>Title*</CTableDataCell>
                        <CTableDataCell>
                            <CFormInput type="text" name="title" onChange={(e)=>{setTitle(e.target.value)}} value={Title} size="sm" id="#" />
                        </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row"></CTableHeaderCell>
                        <CTableDataCell>Tag Line*:</CTableDataCell>
                        <CTableDataCell>
                            <textarea name="postContent" onChange={(e)=>{setTagLine(e.target.value)}} value={TagLine} rows={10} cols={120} />
                        </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row"></CTableHeaderCell>
                        <CTableDataCell>Button Text:</CTableDataCell>
                        <CTableDataCell>
                            <CFormInput type="text" value={ButtonText} onChange={(e)=>{setButtonText(e.target.value)}} name="Button_Text" size="sm" id="#" />
                        </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row"></CTableHeaderCell>
                        <CTableDataCell>Upload Banner:</CTableDataCell>
                        <CTableDataCell>
                            <CFormInput type="file" value={UploadBanner} onChange={(e)=>{setUploadBanner(e.target.value)}} name="Upload_Banner" size="sm" id="formFileSm" />
                        </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row"></CTableHeaderCell>
                        <CTableDataCell>Mobile Banner:</CTableDataCell>
                        <CTableDataCell>
                            <CFormInput type="file" value={MobileBanner} onChange={(e)=>{setMobileBanner(e.target.value)}} name="Mobile_Banner" size="sm" id="formFileSm" />
                        </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row"></CTableHeaderCell>
                        <CTableDataCell>Url:</CTableDataCell>
                        <CTableDataCell>
                            <CFormInput type="text" value={UrlLink} onChange={(e)=>{setUrlLink(e.target.value)}} name="Url" size="sm" id="#" />
                        </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row"></CTableHeaderCell>
                        <CTableDataCell>
                            <CButton as="input" type="submit" onClick={saveData} color="primary" value="Submit" />
                        </CTableDataCell>
                        <CTableDataCell>
                        <CButton as="input" type="submit" color="primary" value="Cancel" />
                        </CTableDataCell>
                    </CTableRow>
                   
                </CTableBody>
            </CTable>

        </>
    )
} export default AddHomeBanner;