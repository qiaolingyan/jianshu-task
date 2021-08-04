import React from 'react'
import { Tabs } from 'antd';
import './Login.css'
import SignIn from './SignIn'
import SignUp from './SignUp'


const { TabPane } = Tabs;

function Login () {
  return (
    <div className="login-wrap">
      <div className="login">
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="登录" key="1">
            <SignUp />
          </TabPane>
          <TabPane tab="·" disabled >
          </TabPane>
          <TabPane tab="注册" key="2">
            <SignIn />
          </TabPane>
        </Tabs>
      </div>
    </div>
  )

}

export default Login
