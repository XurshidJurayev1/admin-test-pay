import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'

const AppContent = ({children}) => {


  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        {children}
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
