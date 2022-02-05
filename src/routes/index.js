import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'




// Pages
const Login = React.lazy(() => import('../views/pages/login/Login'))
const Register = React.lazy(() => import('../views/pages/register/Register'))
const Page404 = React.lazy(() => import('../views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('../views/pages/page500/Page500'))
const MainAdmin = React.lazy(() => import('../components/MainAdmin'))


const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('../views/theme/colors/Colors'))
const Typography = React.lazy(() => import('../views/theme/typography/Typography'))



const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const example = ( ) => {
  return (
    <h1>example</h1>
  )
}
const home = ( ) => {
  return (
    <h1>home</h1>
  )
}
const fake = ( ) => {
  return (
    <h1>fake</h1>
  )
}

const routes = [
  { path: '/', exact: true, name: 'Home', component: home },  
  { path: '/fake', name: 'Fake', component: fake },
  { path: '/example', name: 'Example', component: example },
  { path: '/login', name: 'Login Page', component: Login },
  { path: '/register', name: 'Register Page', component: Register },
  { path: '/404', name: 'Page 404', component: Page404 },
  { path: '/500', name: 'Page 500', component: Page500 },
]

export const adminRoutes = [
  { path: '/admin',  exact: true, name: 'Admin', component: Dashboard },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme',  exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
]






const Routes = () => {
  return (
    <Router>
        <React.Suspense fallback={loading}>
          <Switch>
            
            
            {
              adminRoutes.map((route, idx) => {
                
                return <Route 
                  key={route.path}
                  exact={route.exact}
                  path={route.path} 
                  name={route.name} 
                  render={(props) => <MainAdmin {...props}  ><route.component/></MainAdmin>} />  
              })
            }

            {
              routes.map((route, idx) => {
                return <Route 
                    key={route.path}
                    exact={route.exact}
                    path={route.path} 
                    name={route.name} 
                    > 
                      <route.component/>
                  </Route>
              })
            }
            
            
            
            
            
            
            
            
            
            
            
            
            <Route path="*" name="404" render={(props) => <Page404 {...props} />} />
          </Switch>
        </React.Suspense>
      </Router>
  )
}

export default Routes
