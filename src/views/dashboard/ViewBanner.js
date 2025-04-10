import React from "react";
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CFormSelect, CFormInput,CButton } from "@coreui/react";


function ViewBanner() {
    return (
        <>
            <h5>View Banner</h5>


            <CTable>
                <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell scope="col">S.No.</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Type</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Banner</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Upload Date</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Publish</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Edit</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Delete</CTableHeaderCell>

                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    <CTableRow>
                        <CTableHeaderCell scope="col">S.No.</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Type</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Banner</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Upload Date</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Publish</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Edit</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Delete</CTableHeaderCell>
                    </CTableRow>
                   

                </CTableBody>
            </CTable>

        </>
    )
} export default ViewBanner;