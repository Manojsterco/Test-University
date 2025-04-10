import React from "react";
import { CFormCheck, CFormInput, CInputGroup, CInputGroupText, CFormLabel, CFormTextarea,CButton } from '@coreui/react'

function HomeBanner() {
    return (
        <>
            <h5>Add Home Banner</h5>

            <div className="mb-3">
                <CFormLabel htmlFor="formFileSm">DeskTop Banner</CFormLabel>
                <CFormInput type="file" size="sm" id="formFileSm" />
            </div>
            <label>
                <h6>DeskTop Banner Content</h6>
                <textarea name="postContent" rows={4} cols={100} />
            </label>
            <div className="mb-3">
                <CFormLabel htmlFor="formFileSm">Mobile Banner</CFormLabel>
                <CFormInput type="file" size="sm" id="formFileSm" />
            </div>
            <label>
                <h6>Mobile Banner Content</h6>
                <textarea name="postContent" rows={4} cols={100} />
            </label>
            <br/>
            <CButton as="input" type="submit" color="primary" value="Submit" />

        </>
    )
} export default HomeBanner;