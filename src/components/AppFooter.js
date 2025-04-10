import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="avascript:void(0);" target="_blank" rel="noopener noreferrer">
          Test
        </a>
        <span className="ms-1">&copy; Test University. All Rights Reserved.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="javascript:void(0);" rel="noopener noreferrer">
        Test University. All Rights Reserved.
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
