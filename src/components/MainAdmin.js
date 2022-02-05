import React from 'react';
import { connect } from 'react-redux';

const DefaultLayout = React.lazy(() => import('../layout/DefaultLayout'));
const Login = React.lazy(() => import('../views/pages/login/Login'));

const MainAdmin = (props) => {
  


  return (
    <div>
      {
        props.admins.length > 0 ? <DefaultLayout   >{props.children}</DefaultLayout>
          :
          <Login />
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    admins: state.adminReducer,
  };
};


export default connect(mapStateToProps, {})(MainAdmin);

