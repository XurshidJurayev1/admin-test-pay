import React from 'react'
import { CFooter, CImage } from '@coreui/react'
import logo from '../assets/images/logoCompany.png'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          <CImage rounded src={logo}  height={25} />
        </a>
        <span className="ms-1"> &copy; Website design and development</span>
      </div>
      {/* <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          CoreUI for React
        </a>
      </div> */}
    </CFooter>
  )
}

export default React.memo(AppFooter)
