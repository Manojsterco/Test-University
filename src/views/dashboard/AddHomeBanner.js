import React from "react";
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CFormSelect, CFormInput,CButton } from "@coreui/react";


function AddHomeBanner() {
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
                            <CFormSelect aria-label="Default select example">
                                <option>Desktop</option>
                                <option value="1">Desktop</option>
                                <option value="2">Mobile</option>
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
                        <CTableDataCell>Tag Line*:</CTableDataCell>
                        <CTableDataCell>
                            <textarea name="postContent" rows={10} cols={120} />
                        </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row"></CTableHeaderCell>
                        <CTableDataCell>Button Text:</CTableDataCell>
                        <CTableDataCell>
                            <CFormInput type="text" size="sm" id="#" />
                        </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row"></CTableHeaderCell>
                        <CTableDataCell>Upload Banner:</CTableDataCell>
                        <CTableDataCell>
                            <CFormInput type="file" size="sm" id="formFileSm" />
                        </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row"></CTableHeaderCell>
                        <CTableDataCell>Mobile Banner:</CTableDataCell>
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
                        <CTableDataCell>
                            <CButton as="input" type="submit" color="primary" value="Submit" />
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