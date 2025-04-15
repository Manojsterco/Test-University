import React from "react";
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CFormSelect, CFormInput,CButton } from "@coreui/react";


function AddPopUpBanner(){
    return(
        <> <h5>Add Home Banner</h5>
        
        
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
                                    <CFormSelect aria-label="Default select example">                                   
                                        <option value="1">Banner</option>                                      
                                    </CFormSelect>
                                </CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableHeaderCell scope="row"></CTableHeaderCell>
                                <CTableDataCell>Title*</CTableDataCell>
                                <CTableDataCell>
                                    <CFormInput type="text" size="sm" id="#" />
                                </CTableDataCell>
                            </CTableRow>
                            
                            <CTableRow>
                                <CTableHeaderCell scope="row"></CTableHeaderCell>
                                <CTableDataCell>Upload Pop Banner:</CTableDataCell>
                                <CTableDataCell>
                                    <CFormInput type="file" size="sm" id="formFileSm" />
                                </CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableHeaderCell scope="row"></CTableHeaderCell>
                                <CTableDataCell>Url:</CTableDataCell>
                                <CTableDataCell>
                                    <CFormInput type="text" size="sm" id="#" />
                                </CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableHeaderCell scope="row"></CTableHeaderCell>
                                <CTableDataCell>Display Order:</CTableDataCell>
                                <CTableDataCell>
                                    <CFormInput type="text" size="sm" id="#" />
                                </CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableHeaderCell scope="row"></CTableHeaderCell>
                                <CTableDataCell>
                                    
                                </CTableDataCell>
                                <CTableDataCell>
                                <CButton as="input" type="submit" color="primary" value="Submit" />&nbsp;&nbsp;
                                <CButton as="input" type="submit" color="primary" value="Cancel" />                                    
                                </CTableDataCell>
                                
                            </CTableRow>
        
                        </CTableBody>
                    </CTable>

        </>
    );
}export default AddPopUpBanner;