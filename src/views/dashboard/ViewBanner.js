import React from "react";
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CFormSelect, CFormInput, CButton } from "@coreui/react";
import { useEffect, useState } from "react";
import { FaPenSquare,FaRegTrashAlt,FaCheck } from "react-icons/fa";



function ViewBanner() {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch(`http://localhost:4000/api/banners`);
            const data = await response.json();
            setData(data);

        }
        fetchProducts();
    }, []);


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
                    {
                        data.map((item,i) => (
                     
                            <CTableRow key={i}>
                                <CTableHeaderCell scope="col">{item.id}</CTableHeaderCell>
                                <CTableHeaderCell scope="col">{item.type}</CTableHeaderCell>
                                <CTableHeaderCell scope="col"><img src={item.upload_banner} /></CTableHeaderCell>
                                <CTableHeaderCell scope="col">{item.title}</CTableHeaderCell>
                                <CTableHeaderCell scope="col">{item.created_at}</CTableHeaderCell>

                                <CTableHeaderCell scope="col"><button><FaCheck /></button></CTableHeaderCell>
                                <CTableHeaderCell scope="col"><button><FaPenSquare/></button></CTableHeaderCell>
                                <CTableHeaderCell scope="col"><button><FaRegTrashAlt/></button></CTableHeaderCell>
                            </CTableRow>
                       
                          ))
                    }
                </CTableBody>
            </CTable>

        </>
    )
} export default ViewBanner;