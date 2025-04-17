import React from "react";
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CFormSelect, CFormInput,CButton } from "@coreui/react";
import { useEffect, useState } from 'react';

function ViewBanner() {
    const [data, setData] = useState([]);

   useEffect(()=>{
    fetch("http://localhost:3000/api/banners").then((result)=>{
        result.json().then((resp)=>{
           //console.warn("result",resp)
            setData(resp);
        })
    })
   },[])
   console.warn(data)
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
                    {data.map((item)=>
                    <CTableRow key={item.id}>
                    <CTableHeaderCell scope="col">id</CTableHeaderCell>
                    <CTableHeaderCell scope="col">{item.type}</CTableHeaderCell> 
                    <CTableHeaderCell scope="col">{item.title}</CTableHeaderCell>
                    <CTableHeaderCell scope="col">{item.tag_line}</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Publish</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Publish</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Edit</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Delete</CTableHeaderCell>
                </CTableRow>
                    )
                    }
                    
                   

                </CTableBody>
            </CTable>

        </>
    )
} export default ViewBanner;