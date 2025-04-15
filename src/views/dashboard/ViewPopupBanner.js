import React from "react";
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CFormSelect, CFormInput,CButton } from "@coreui/react";
import { FaPenSquare,FaRegTrashAlt,FaCheck } from "react-icons/fa";
// import {BannerImages} from '../../../src/assets/images/avatars/1.jpg';


function ViewPopupBanner(){
    return(
        <>
         <h5>View Popup Banner</h5>
        
        
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
                                <CTableHeaderCell scope="col">1.</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Banner</CTableHeaderCell>
                                <CTableHeaderCell scope="col"></CTableHeaderCell>
                                <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Upload Date</CTableHeaderCell>
                                <CTableHeaderCell scope="col"><button><FaCheck /></button></CTableHeaderCell>
                                <CTableHeaderCell scope="col"><button><FaPenSquare/></button></CTableHeaderCell>
                                <CTableHeaderCell scope="col"><button><FaRegTrashAlt/></button></CTableHeaderCell>
                            </CTableRow>
                           
        
                        </CTableBody>
                    </CTable>
        
        </>
    )
} export default ViewPopupBanner;